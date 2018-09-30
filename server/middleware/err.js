
module.exports = function(){
  return function(err, req, res, next){
    console.log(err.message);
    //console.log('This is the error', err);
    //console.log('This is the error', err.stack)
    res.status(500);
  };
}
