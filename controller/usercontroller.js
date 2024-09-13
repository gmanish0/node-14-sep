const users = require('../users.json')
function grtUser(req,res){
    try{
        res.json(users)
    }catch(err){

    }
}
module.exports={
    grtUser
}