const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const asyncWrap = require("../utils/asyncWrap.js");
const {isLoggedIn,isOwner,validateListing} = require("../middleware.js");
const listingController = require("../controllers/listing.js"); 
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({storage})

//Index.route and create route
router.route("/")
    .get(asyncWrap(listingController.index))
   .post(isLoggedIn,upload.single('listing[image]'),validateListing,asyncWrap(listingController.createListing));
  

//create route
router.get("/new",isLoggedIn,listingController.renderNewForm);


//show,update,delete route
router.route("/:id")
.get(isLoggedIn,asyncWrap(listingController.showListing))
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing,asyncWrap(listingController.updateListing))
.delete(isLoggedIn,isOwner,asyncWrap(listingController.destroyListing));


//edit route
router.get("/:id/edit",isLoggedIn,isOwner,asyncWrap(listingController.renderEditForm));


module.exports = router;