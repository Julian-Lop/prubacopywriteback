
exports.text = (req,res)=>{
    let txt = req.query.text
    try {
        if(!txt) return res.status(400).json({error:'no text'})
        let txtinvertido = txt.split("").reverse().join("")
        return res.status(200).json({text:txtinvertido})
    } catch (error) {
        return res.send(error)
    }
    
}