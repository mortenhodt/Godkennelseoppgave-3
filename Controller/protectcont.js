user = require("../harduser")


const logincont = require("./logincont");

function logincont(req, res) {
        if(err){
            res.sendStatus(403);
        } else{
            res.json({
                msg: "Not verified",
                data: data
            })
        }
    } 


module.exports = logincont