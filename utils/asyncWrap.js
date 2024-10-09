module.exports = (fn)=>{
    return (req,res,next)=>{
        fn(req,res,next).catch(next);
    }
}

// function asyncWrap(fn){
//     return function(req,res,next){
//         fn(req,res,next).catch(next);
//     }
// }