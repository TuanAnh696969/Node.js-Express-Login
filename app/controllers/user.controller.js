

const { authJwt } = require("../middleware");
const { user } = require("../models");





exports.allAccess = (req, res) => {
    res.status(200).send("public conten");
};
//  
  exports.userBoard = (req, res) => {

    // x-access-token: [header].[payload].[signature]
        // lấy token từ header
        //const token = req.headers.authorization.split(' ')[1];
        const token = req.headers['x-access-token'];

        // hiển thị thông tin token
        res.status(200).send({
          token,
          
        });
    };
    
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };

  exports.findAll = (req, res) => {
    const token = req.headers['x-access-token'];
    //const decoded = verifyJWT(token, secretKey);

 /*   function verifyJWT(token, secretKey) {
      const decoded = jwt.verifyJWT(token, secretKey);
      return decoded;
    }
  */  
    const username = req.query.username;
    const condition = username ? { username:{ [Op.iLike]:`%${username}%`}}:null;
    //var secretKey = "x-access-token";
    //var jwt = require('jsonwebtoken');
    user.findAll({ where: condition })
    .then(user => {
        res.send({
          accessToken: token,
          user
        });
      })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error  "
      });
    });

  };








  
  
