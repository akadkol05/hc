const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Aadhar = require("../models/aadharCardModel");
const sendRes = require("../utils/jwtToken");

// register a aadhar 
exports.registeraadhar = catchAsyncErrors(async(req, res, next) => {


    const { name, addharnumber, email, dob, gender, phoneno, address, pincode } = req.body;

    const aadhar = await Aadhar.create({
        name,
        addharnumber,
        email,
        dob,
        gender,
        phoneno,
        address,
        pincode
    });

    sendRes(aadhar, 201, res);
});