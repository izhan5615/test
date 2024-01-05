const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String, // Change from `type:email` to `type: String`
            required: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error("Invalid email address");
                }
            }
        },
        phone: {
            type: Number,
            required: true
        },
        message: {
            type: String // Corrected from `type: Strin`
        },
        date: {
            type: Date, // Corrected from `type: data`
            default: Date.now
        }
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
