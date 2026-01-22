import mongoose from "mongoose";
import dotenv from "dotenv";
import Coupon from "../models/Coupon.js";

dotenv.config();

const coupons = [
    { code: "TASK10" },
    { code: "WELCOME20" },
    { code: "START50" },
    { code: "NEWUSER30" },
    { code: "FREEDAY" },
    { code: "DISCOUNT15" },
    { code: "SAVE25" },
    { code: "OFFER5" },
    { code: "PROMO40" },
    { code: "EXTRA10" },
];

const seed = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        await Coupon.deleteMany(); // optional (clears old ones)

        await Coupon.insertMany(coupons);

        console.log("Coupons inserted successfully");
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seed();
