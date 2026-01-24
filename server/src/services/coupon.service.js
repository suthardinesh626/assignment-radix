import Coupon from "../models/Coupon.js";
import crypto from "crypto";

const generateCouponCode = (email) => {
  const emailHash = crypto.createHash("md5").update(email).digest("hex").substring(0, 8).toUpperCase();
  const timestamp = Date.now().toString(36).toUpperCase().substring(0, 4);
  return `TASK${emailHash}${timestamp}`;
};

export const assignCoupon = async (email, userId) => {
  let couponCode = generateCouponCode(email);
  let existingCoupon = await Coupon.findOne({ code: couponCode });
  let attempts = 0;
  while (existingCoupon && attempts < 10) {
    couponCode = generateCouponCode(email + Date.now());
    existingCoupon = await Coupon.findOne({ code: couponCode });
    attempts++;
  }

  const coupon = await Coupon.create({
    code: couponCode,
    isUsed: false,
    usedBy: userId,
    usedAt: null
  });

  return coupon.code;
};
