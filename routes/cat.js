var express = require('express')

const Cat = require('../models/cat')

var router = express.Router()

router.post('/', async function (req, res) {
    const kitty = new Cat({name: req.body.name})
    const result = await kitty.save();
    console.log('kitty saved: ',result)
  res.send('cat saved')
})

router.get('/', function (req, res) {
  res.send('the cats')
})

module.exports = router