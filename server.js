const http = require('http')
const path = require('path')
const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))

app.get('*', function (req, res) {
 return res.render('index')
})

app.listen(process.env.PORT || 3000, () =>
  console.log('Server listening on port ' + (process.env.PORT || 3000))
)
