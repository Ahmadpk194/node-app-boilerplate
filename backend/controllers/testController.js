const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures')



// testing  => /api/v1/test
exports.testing = catchAsyncErrors(async (req, res, next) => {

    res.status(201).json({
        success: true,
        message: 'testing'
    })
})