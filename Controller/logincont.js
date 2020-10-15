const user = require("../harduser")


function logincont(req, res){
    res.json(user)
}




module.exports = logincont


