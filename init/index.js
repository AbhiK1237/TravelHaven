const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
//const { init } = require("../models/listing");

main()
.then(()=>{
    console.log("root is working");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/TravelHaven');
}

const initDb = async()=>{
    await Listing.deleteMany({});
    initData.data  = initData.data.map((obj)=>({...obj,owner : '66f4602a9c915e5235e26926'}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDb();
