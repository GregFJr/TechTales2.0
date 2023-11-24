const router = require('express').Router();
const withAuth = require('../utils/auth');
const dashBoardController = require('../controllers/dashBoardController');


router.get('/', withAuth, dashBoardController.renderDashboard);

router.get('/add-form', withAuth, dashBoardController.renderAddForm);

router.get('/update-form/:id', withAuth, dashBoardController.renderUpdateForm);




module.exports = router;
