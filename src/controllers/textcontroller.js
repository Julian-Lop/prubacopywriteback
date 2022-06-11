
exports.text = (req,res)=>{
    let txt = req.query.text
    let txtinvertido = txt.split("").reverse().join("")
    res.send(txtinvertido)
}