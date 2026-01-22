import User from "../models/ User.js";
import { assignCoupon } from "../services/coupon.service.js";
import { sendCouponEmail } from "../services/ email.service.js";

export const signupUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already registered" });
    }

    const user = await User.create({ name, email });

    const couponCode = await assignCoupon(email, user._id);

    user.couponCode = couponCode;
    await user.save();

    await sendCouponEmail(email, couponCode);

    res.status(200).json({ message: "Signup successful. Coupon sent!" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
