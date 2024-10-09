const express = require("express");
const router = express.Router({mergeParams : true});
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");
const {validateReview,isLoggedIn,isReviewAuthor} = require("../middleware.js");
const asyncWrap = require("../utils/asyncWrap.js");
const reviewController = require("../controllers/review.js");


//post route
router.post("/",isLoggedIn,validateReview, asyncWrap(reviewController.createReview));

//delete review route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,asyncWrap(reviewController.destroyReview));

module.exports = router;