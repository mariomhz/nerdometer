const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// Generate JWT token
exports.generateJWT = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE }
  );
};

// Generate random token (for email verification, password reset)
exports.generateRandomToken = () => {
  return crypto.randomBytes(32).toString('hex');
};

// Hash token (for storing in database)
exports.hashToken = (token) => {
  return crypto.createHash('sha256').update(token).digest('hex');
};

// Send token response (JWT in cookie and JSON)
exports.sendTokenResponse = (user, statusCode, res) => {
  const token = exports.generateJWT(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + parseInt(process.env.JWT_COOKIE_EXPIRE) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true, // Prevent XSS attacks
    secure: process.env.NODE_ENV === 'production', // HTTPS only in production
    sameSite: 'strict' // CSRF protection
  };

  res
    .status(statusCode)
    .cookie('token', token, cookieOptions)
    .json({
      success: true,
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        emailVerified: user.emailVerified,
        preferredLanguage: user.preferredLanguage,
        totalQuizzes: user.totalQuizzes,
        highestScore: user.highestScore
      }
    });
};
