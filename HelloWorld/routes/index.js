const express=require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('Home with router');
});
module.exports = router;