const { get } = require("../routes/web");

const getHomePage = (req, res) => {
    res.send('Hello World! Toi la nguoi dep');
}

const getABC = (req, res) => {
    res.send('Hello World! Check ABC');
}

const getHuuPhuoc = ('/huuphuoc', (req, res) => {
  //res.send('<h1>Phuoc Dep Trai</h1>');
  res.render('sample.ejs');
})
module.exports = {
    getHomePage, getABC, getHuuPhuoc
}