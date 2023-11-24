const router = require('express').Router();
const loginController = require('../controllers/loginController');


router.get('/', (req, res) => {
    res.render('login')
});

router.post('/authenticate', loginController.loginPage);

module.exports = router;
