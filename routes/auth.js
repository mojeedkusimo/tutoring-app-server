const router = require('express').Router();
const { signUp } = require('../controllers/auth');

router.get('/', (req,res) => {
    res.send('This is a Tutoring Application');
});

router.post('/signup', signUp);
module.exports = router;