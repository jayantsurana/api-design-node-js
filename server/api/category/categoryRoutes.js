var router = require('express').Router();
var logger = require('../../util/logger');

// setup boilerplate route jsut to satisfy a request
// for building
router.route('/')
  .get(function(req, res){
    logger.log('Hey from user!!');
    return next(new Error('messed up!'));
    res.send({ok: true});
  });

module.exports = router;
