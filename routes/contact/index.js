const express = require('express');
const router = express.Router();

router.route('/contact').get(function(req, res) {
  res.render('contact');
});

module.exports = router;
