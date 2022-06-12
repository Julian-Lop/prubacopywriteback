
const isPalindrome = (str) => {
    var lowRegStr = str
    var reverseStr = lowRegStr.split('').reverse().join('')
    let r = reverseStr === lowRegStr ? true : false
    return r
}


exports.text = (req,res)=>{
    let txt = req.query.text
    try {
        if(!txt) return res.status(400).json({error:'no text'})
        let txtinvertido = txt.split("").reverse().join("")
        return res.status(200).json({text:txtinvertido, palindrome:isPalindrome(txt)})
    } catch (error) {
        return res.send(error)
    }
    
}