const {Router} = require('express')

const router = Router()

router.get('/iecho', (req,res)=>{
    let txt = req.query.text
    let txtinvertido = txt.split("").reverse().join("")
    res.send(txtinvertido)
})

module.exports = router