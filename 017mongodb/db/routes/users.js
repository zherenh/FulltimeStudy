var express = require('express');
const UserModel = require('../model/UserModel');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/user/add", (req,res)=>{
  console.log(req.body)

  // 需要创建model
  const {username, password, age} = req.body
  UserModel.create({
    username:username,
    password:password, 
    age:age
  }).then(data=>{
    console.log(data);
    res.send({
      ok:1
    })
  })
})

module.exports = router;
