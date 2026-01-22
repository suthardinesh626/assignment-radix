import { transporter } from "../config/mailer.js";

export const sendCouponEmail = async (email, couponCode) => {
  await transporter.sendMail({
    from: `"TaskMan" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your TaskMan Coupon Code 🎉",
    html: `
      <h2>Welcome to TaskMan!</h2>
      <p>Your exclusive coupon code is:</p>
      <h1>${couponCode}</h1>
      <p>Use it to get started today.</p>
    `
  });
};
