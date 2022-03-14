
const user = (req, res) => {
   res.json({name:'jin',age:'28'})
// res.send('test')
}
const admin = (req, res) => {
    //res.send('test중입니다.')
    return res.status(200).json({ result: 'test' })
}

module.exports = {
    user,
    admin
}