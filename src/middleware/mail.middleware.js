import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/* ES module dirname fix */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Sends confirmation email after successful job application
 * Non-blocking middleware (does not break flow if mail fails)
 */
export const sendConfirmationMail = async (req, res, next) => {
  try {
    // Prefer email from form, fallback to session
    const email = req.body.email || req.session?.user?.email;
    const name = req.body.name || req.session?.user?.name || "Applicant";

    // If no email, skip mail step safely
    if (!email) {
      return next();
    }

    // Create mail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Load HTML email template
    const templatePath = path.join(
      __dirname,
      "../views/html/mailTemplate.html"
    );

    let htmlContent = fs.readFileSync(templatePath, "utf-8");

    // Replace placeholders
    htmlContent = htmlContent.replace("{{name}}", name);

    // Mail config
    const mailOptions = {
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Application Submitted Successfully",
      html: htmlContent,
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    console.log(`📧 Confirmation email sent to ${email}`);
    next();
  } catch (error) {
    console.error("❌ Email sending failed:", error.message);
    next(); // never block request
  }
};
