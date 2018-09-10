var express = require('express');
var getCalendarEvents = require('./calendar.js');
var router = express.Router();
var app = express()


/* GET home page. */
router.get('/', function (req, res, next) {
  let eventsPromise = getCalendarEvents();

  eventsPromise.then(events => {
    //console.log(events);
  
    //console.log(JSON.stringify(events.title));
    var users = ["A","B","C"];  
    res.render('index', {titles: 'Calendar', test: events, user:users});
  });


  //console.log('it worked');
});






module.exports = router;