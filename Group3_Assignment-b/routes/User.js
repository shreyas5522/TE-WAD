const express = require('express') 
const UserController = require('../controllers/User') 
const router = express.Router();
  
router.get('/', UserController.findAll); 

router.get('/:id', UserController.findOne); 

router.post('/', UserController.create); 

router.patch('/:id', UserController.update);

router.delete('/:id', UserController.destroy); 

module.exports = router;