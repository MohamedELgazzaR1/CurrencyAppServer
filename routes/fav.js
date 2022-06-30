const router = require("express").Router();
const {fav, validate}  = require("../models/favourite")

router.post("/",async(req , res  ) =>{

    try{
        const {error} = validate(req.body);
        if (error) return res.status(400).send({message:error.details[0].message})

        const favv = await fav.replaceOne({id:"1"},{...req.body})

        if(favv.matchedCount === 0) await new fav ({...req.body}).save()
        
        res.status(201).send({message:"Favourite added successfully"})
    }catch(error){
        console.log(error)
        res.status(500).send({message:"Internal server error"})
    }
})

router.get('/',async(req, res) => {
    try{
        
        const favv = await fav.findOne({id:"1"})
        if(!favv) return res.status(401).send({message:"No favourite added"})
        res.send(favv)
    }catch(error){
        console.log(error)
        res.status(500).send({message:"Internal server error"})
    }
  })

module.exports = router;