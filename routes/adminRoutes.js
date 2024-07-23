const express=require('express')
const {getAllUserController,
     getAllDoctorsController,
     changeAccountStatusController}=require('../controllers/adminCtrl')
const authMiddleware=require('../middlewares/authMiddleware');

const router=express.Router()

// GET METHOD || USERS
router.get('/getAllUsers',authMiddleware,getAllUserController)

// GET METHOD || DOCTOR
router.get('/getAllDoctors',authMiddleware,getAllDoctorsController)

//POST ACCOUNT STATUS
router.post(
    "/changeAccountStatus",
    authMiddleware,
    changeAccountStatusController
  );
module.exports=router