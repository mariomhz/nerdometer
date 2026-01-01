const sgMail = require('@sendgrid/mail');

// Set SendGrid API key if configured
if (process.env.SENDGRID_API_KEY && process.env.SENDGRID_API_KEY !== 'your-sendgrid-api-key-here') {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

const getBaseUrl = () => {
  return process.env.NODE_ENV === 'production'
    ? process.env.FRONTEND_PRODUCTION_URL
    : process.env.FRONTEND_URL;
};

// Send verification email
exports.sendVerificationEmail = async (user, verificationToken) => {
  const verificationUrl = `${getBaseUrl()}/verify-email.html?token=${verificationToken}`;

  const msg = {
    to: user.email,
    from: {
      email: process.env.SENDGRID_FROM_EMAIL,
      name: process.env.SENDGRID_FROM_NAME
    },
    subject: 'Verify Your Nerdometer Account',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; background: #0a0a0a; color: #00ffff; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                   color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { padding: 30px; background: #1a1a1a; border: 2px solid #00ffff; border-radius: 0 0 10px 10px; }
          .button { display: inline-block; padding: 12px 30px; background: #ff00ff;
                   color: white; text-decoration: none; border-radius: 5px;
                   margin: 20px 0; font-weight: bold; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 2rem;">🤓 NERDÓMETRO</h1>
          </div>
          <div class="content">
            <h2 style="color: #ff00ff;">Welcome, ${user.username}!</h2>
            <p>Thank you for registering at Nerdometer. Please verify your email address to complete your registration.</p>
            <p>Click the button below to verify your email:</p>
            <a href="${verificationUrl}" class="button">Verify Email</a>
            <p>Or copy and paste this link into your browser:</p>
            <p style="word-break: break-all; color: #00ffff; background: #0a0a0a; padding: 10px; border-radius: 5px;">${verificationUrl}</p>
            <p><strong style="color: #ffff00;">This link will expire in 24 hours.</strong></p>
            <p>If you didn't create an account, please ignore this email.</p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Nerdometer. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  try {
    // Only send if SendGrid is properly configured
    if (process.env.SENDGRID_API_KEY && process.env.SENDGRID_API_KEY !== 'your-sendgrid-api-key-here') {
      await sgMail.send(msg);
      console.log(`✅ Verification email sent to ${user.email}`);
    } else {
      console.log(`📧 Email would be sent to ${user.email} (SendGrid not configured)`);
      console.log(`Verification URL: ${verificationUrl}`);
    }
  } catch (error) {
    console.error('Error sending verification email:', error);
    throw new Error('Could not send verification email');
  }
};

// Send password reset email
exports.sendPasswordResetEmail = async (user, resetToken) => {
  const resetUrl = `${getBaseUrl()}/reset-password.html?token=${resetToken}`;

  const msg = {
    to: user.email,
    from: {
      email: process.env.SENDGRID_FROM_EMAIL,
      name: process.env.SENDGRID_FROM_NAME
    },
    subject: 'Reset Your Nerdometer Password',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; background: #0a0a0a; color: #00ffff; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                   color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { padding: 30px; background: #1a1a1a; border: 2px solid #ff00ff; border-radius: 0 0 10px 10px; }
          .button { display: inline-block; padding: 12px 30px; background: #f5576c;
                   color: white; text-decoration: none; border-radius: 5px;
                   margin: 20px 0; font-weight: bold; }
          .warning { background: #fff3cd; border-left: 4px solid #ffc107;
                    padding: 15px; margin: 20px 0; color: #333; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 2rem;">🔒 Password Reset</h1>
          </div>
          <div class="content">
            <h2 style="color: #ff00ff;">Hello, ${user.username}</h2>
            <p>You requested to reset your password for your Nerdometer account.</p>
            <p>Click the button below to reset your password:</p>
            <a href="${resetUrl}" class="button">Reset Password</a>
            <p>Or copy and paste this link into your browser:</p>
            <p style="word-break: break-all; color: #00ffff; background: #0a0a0a; padding: 10px; border-radius: 5px;">${resetUrl}</p>
            <div class="warning">
              <strong>⚠️ Security Notice:</strong>
              <ul>
                <li>This link will expire in 1 hour</li>
                <li>If you didn't request this reset, please ignore this email</li>
                <li>Your password will not change until you complete the reset process</li>
              </ul>
            </div>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Nerdometer. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  try {
    if (process.env.SENDGRID_API_KEY && process.env.SENDGRID_API_KEY !== 'your-sendgrid-api-key-here') {
      await sgMail.send(msg);
      console.log(`✅ Password reset email sent to ${user.email}`);
    } else {
      console.log(`📧 Email would be sent to ${user.email} (SendGrid not configured)`);
      console.log(`Reset URL: ${resetUrl}`);
    }
  } catch (error) {
    console.error('Error sending password reset email:', error);
    throw new Error('Could not send password reset email');
  }
};

// Send welcome email (after verification)
exports.sendWelcomeEmail = async (user) => {
  const msg = {
    to: user.email,
    from: {
      email: process.env.SENDGRID_FROM_EMAIL,
      name: process.env.SENDGRID_FROM_NAME
    },
    subject: 'Welcome to Nerdometer!',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; background: #0a0a0a; color: #00ffff; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
                   color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { padding: 30px; background: #1a1a1a; border: 2px solid #00ff00; border-radius: 0 0 10px 10px; }
          .button { display: inline-block; padding: 12px 30px; background: #43e97b;
                   color: white; text-decoration: none; border-radius: 5px;
                   margin: 20px 0; font-weight: bold; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 2rem;">🎉 Welcome to Nerdometer!</h1>
          </div>
          <div class="content">
            <h2 style="color: #00ff00;">You're all set, ${user.username}!</h2>
            <p>Your email has been verified and your account is now active.</p>
            <p>Here's what you can do now:</p>
            <ul style="color: #00ffff;">
              <li>Take the full Nerdometer quiz (100 questions)</li>
              <li>Try the quick mode (10 questions)</li>
              <li>Track your quiz history and statistics</li>
              <li>Compare your scores over time</li>
            </ul>
            <a href="${getBaseUrl()}" class="button">Start Your First Quiz</a>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Nerdometer. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  try {
    if (process.env.SENDGRID_API_KEY && process.env.SENDGRID_API_KEY !== 'your-sendgrid-api-key-here') {
      await sgMail.send(msg);
      console.log(`✅ Welcome email sent to ${user.email}`);
    } else {
      console.log(`📧 Welcome email would be sent to ${user.email} (SendGrid not configured)`);
    }
  } catch (error) {
    console.error('Error sending welcome email:', error);
    // Don't throw error for welcome email - it's not critical
  }
};
