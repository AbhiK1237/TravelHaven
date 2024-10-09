if(process.env.NODE_ENV!="production"){
    require('dotenv').config()
}
console.log(process.env.CLOUD_NAME);




const express =  require("express");
const app = express();
const mongoose =  require("mongoose");
const ExpressError = require("./utils/ExpressError.js");
const path = require("path");
const ejsMate = require("ejs-mate");
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended :true}));
const flash = require("connect-flash");
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");


// const mongo_url= 'mongodb://127.0.0.1:27017/TravelHaven';
const dbUrl = process.env.ATLASDB_URL;
const store = MongoStore.create({
    mongoUrl : dbUrl,
    crypto: {
        secret: process.env.SECRET,
      },
    touchAfter: 24 * 3600
})

store.on("error",()=>{
    console.log("error in mongo session store",err);
})
const sessionOptions = {
    store,
    secret : process.env.SECRET,
    resave : false,
    saveUninitialized : true,
    cookie : {
        expires : Date.now() + 7*24*60*60*1000,
        maxAge : 7*24*60*60*1000,
        httpOnly : true
    }
}


main()
.then(()=>{
    console.log("root is working");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}     


app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})
// app.get("/demoUser",async (req,res)=>{
//     let fakeUser = new User({
//         email : "fakeUser@gmail.com",
//         username : "fake-user"
//     })
//     let newUser = await User.register(fakeUser,"abhiK");
//     res.send(newUser);
// })

app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);

app.all("*",(req,res,next)=>{
next(new ExpressError(404,"Page Not Found!"));
})
app.use((err,req,res,next)=>{
    let {status=500,message="something went wrong"} = err;
    res.status(status).render("error.ejs",{message});
    // res.status(status).send(message);
})

app.listen(8080,()=>{
    console.log("server is listening on 8080");
})



// app.get("/testListing",(req,res)=>{
//     let sample = new Listing({
//         title : "my new villa",
//         description : "located amidst mountains",
//         price:2300,
//         location:"Haldvani,Uttarakhand",
//         country:"India"
//     })
//     sample.save();
//     console.log("sample was saved");
//     res.send("new home listed");
// })