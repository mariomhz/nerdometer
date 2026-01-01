const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Import middleware
const { setupSecurity, generalLimiter } = require('./middleware/security');
const { optionalAuth } = require('./middleware/auth');

// Security middleware setup (helmet, sanitize, hpp)
setupSecurity(app);

// CORS configuration with credentials
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['http://localhost:3000'];

app.use(cors({
  origin: allowedOrigins,
  credentials: true  // Allow cookies
}));

// Body parser and cookie parser
app.use(express.json());
app.use(cookieParser());

// Apply general rate limiting
app.use(generalLimiter);

// Serve static files from parent directory
app.use(express.static('../'));

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/nerdometer';

mongoose.connect(MONGODB_URI)
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Quiz Result Schema (UPDATED with userId)
const quizResultSchema = new mongoose.Schema({
    // NEW: Link to user (optional for anonymous quiz taking)
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null,
        index: true
    },
    totalScore: {
        type: Number,
        required: true
    },
    maxScore: {
        type: Number,
        required: true
    },
    percentage: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    quizMode: {
        type: String,
        enum: ['quick', 'detailed'],
        default: 'detailed'
    },
    categoryScores: {
        type: Map,
        of: {
            score: Number,
            total: Number
        }
    },
    answers: [{
        category: String,
        question: String,
        answer: Boolean
    }],
    userAgent: String,
    ipAddress: String,
    completedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

// Add compound index for user quiz history
quizResultSchema.index({ userId: 1, completedAt: -1 });

const QuizResult = mongoose.model('QuizResult', quizResultSchema);

// Import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

// Use authentication routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Routes

// Save quiz result (UPDATED with optional auth)
app.post('/api/quiz-results', optionalAuth, async (req, res) => {
    try {
        const {
            totalScore,
            maxScore,
            percentage,
            title,
            quizMode,
            categoryScores,
            answers
        } = req.body;

        const newResult = new QuizResult({
            userId: req.user ? req.user._id : null,  // Link to user if logged in
            totalScore,
            maxScore,
            percentage,
            title,
            quizMode: quizMode || 'detailed',
            categoryScores,
            answers,
            userAgent: req.headers['user-agent'],
            ipAddress: req.ip
        });

        await newResult.save();

        // Update user stats if logged in
        if (req.user) {
            const User = mongoose.model('User');
            await User.findByIdAndUpdate(req.user._id, {
                $inc: { totalQuizzes: 1 },
                $max: { highestScore: totalScore }
            });
        }

        res.status(201).json({
            success: true,
            message: 'Quiz result saved successfully',
            resultId: newResult._id
        });
    } catch (error) {
        console.error('Error saving quiz result:', error);
        res.status(500).json({
            success: false,
            message: 'Error saving quiz result',
            error: error.message
        });
    }
});

// Get all quiz results (for analytics)
app.get('/api/quiz-results', async (req, res) => {
    try {
        const results = await QuizResult.find()
            .select('-userAgent -ipAddress')
            .sort({ completedAt: -1 })
            .limit(100);

        res.json({
            success: true,
            count: results.length,
            results
        });
    } catch (error) {
        console.error('Error fetching quiz results:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching quiz results',
            error: error.message
        });
    }
});

// Get statistics
app.get('/api/stats', async (req, res) => {
    try {
        const totalResults = await QuizResult.countDocuments();
        const averageScore = await QuizResult.aggregate([
            {
                $group: {
                    _id: null,
                    avgScore: { $avg: '$totalScore' },
                    avgPercentage: { $avg: '$percentage' }
                }
            }
        ]);

        const titleDistribution = await QuizResult.aggregate([
            {
                $group: {
                    _id: '$title',
                    count: { $sum: 1 }
                }
            },
            { $sort: { count: -1 } }
        ]);

        res.json({
            success: true,
            stats: {
                totalAttempts: totalResults,
                averageScore: averageScore[0]?.avgScore || 0,
                averagePercentage: averageScore[0]?.avgPercentage || 0,
                titleDistribution
            }
        });
    } catch (error) {
        console.error('Error fetching stats:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching stats',
            error: error.message
        });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: 'Server is running',
        database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📊 API available at http://localhost:${PORT}/api`);
    console.log(`🔐 Auth endpoints available at http://localhost:${PORT}/api/auth`);
});
