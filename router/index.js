const express = require('express');
const {check, validationResult} = require('express-validator');
const router = express.Router();

const validate = [
    check('name')
      .isLength({ min: 1 })
      .withMessage('Please enter a name'),
    check('email')
      .isLength({ min: 1 })
      .withMessage('Please enter an email'), 
];
router.get('/', (req, res) => {
  res.render('form', {title: 'Registration Form'});
});

router.post('/', validate, (req, res) => {
  // console.log(req.body);
  const error = validationResult(req);
  if(error.isEmpty()){
    res.send('Thank you for your registration!');
  }else{
    res.render('form', {
      title: 'Registration form',
      error: error.array(),
      data: req.body,
    });
  }
});

module.exports = router;
