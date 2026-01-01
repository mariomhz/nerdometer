const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { protect } = require('../middleware/auth');

// @route   GET /api/user/quiz-history
// @desc    Get user's quiz history
// @access  Private
router.get('/quiz-history', protect, async (req, res) => {
  try {
    // Import QuizResult model - we'll need to get this from the parent scope
    const QuizResult = mongoose.model('QuizResult');

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const results = await QuizResult.find({ userId: req.user._id })
      .select('-userAgent -ipAddress -answers')
      .sort({ completedAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await QuizResult.countDocuments({ userId: req.user._id });

    res.json({
      success: true,
      count: results.length,
      total,
      page,
      pages: Math.ceil(total / limit),
      results
    });

  } catch (error) {
    console.error('Error fetching quiz history:', error);
    res.status(500).json({
      success: false,
      message: 'Could not fetch quiz history'
    });
  }
});

// @route   GET /api/user/stats
// @desc    Get user's statistics
// @access  Private
router.get('/stats', protect, async (req, res) => {
  try {
    const QuizResult = mongoose.model('QuizResult');
    const userId = req.user._id;

    // Aggregate statistics
    const stats = await QuizResult.aggregate([
      { $match: { userId: userId } },
      {
        $group: {
          _id: null,
          totalQuizzes: { $sum: 1 },
          averageScore: { $avg: '$totalScore' },
          averagePercentage: { $avg: '$percentage' },
          highestScore: { $max: '$totalScore' },
          lowestScore: { $min: '$totalScore' },
          totalQuestions: { $sum: '$maxScore' }
        }
      }
    ]);

    // Mode distribution
    const modeDistribution = await QuizResult.aggregate([
      { $match: { userId: userId } },
      {
        $group: {
          _id: '$quizMode',
          count: { $sum: 1 }
        }
      }
    ]);

    // Recent improvement trend (last 5 quizzes)
    const recentQuizzes = await QuizResult.find({ userId: userId })
      .select('percentage completedAt')
      .sort({ completedAt: -1 })
      .limit(5);

    res.json({
      success: true,
      stats: stats[0] || {
        totalQuizzes: 0,
        averageScore: 0,
        averagePercentage: 0,
        highestScore: 0,
        lowestScore: 0,
        totalQuestions: 0
      },
      modeDistribution,
      recentTrend: recentQuizzes.reverse()
    });

  } catch (error) {
    console.error('Error fetching user stats:', error);
    res.status(500).json({
      success: false,
      message: 'Could not fetch statistics'
    });
  }
});

// @route   GET /api/user/quiz/:id
// @desc    Get specific quiz result details
// @access  Private
router.get('/quiz/:id', protect, async (req, res) => {
  try {
    const QuizResult = mongoose.model('QuizResult');

    const result = await QuizResult.findOne({
      _id: req.params.id,
      userId: req.user._id
    });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Quiz result not found'
      });
    }

    res.json({
      success: true,
      result
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Could not fetch quiz result'
    });
  }
});

module.exports = router;
