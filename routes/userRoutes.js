const express=require('express')
const { loginController, 
    registerController, 
    authController, 
    applyDoctorController,
    getAllNotificationController,
    deleteAllNotificationController,
    getAllDoctorsController,
    bookAppointmentController,
    bookingAvailabilityController,
    userAppiontmentsController,
    
} = require('../controllers/userCtrl')
const authMiddleware = require('../middlewares/authMiddleware')

// router object
const router=express.Router()


// route
// LOGIN || POST
router.post('/login', loginController)

// REGISTER || POST
router.post('/register', registerController)

// Home Auth||POST
router.post('/getUserData', authMiddleware, authController)

// Apply Doctor Auth||POST
router.post('/apply-doctor', authMiddleware, applyDoctorController)

// Notification Auth||POST
router.post('/get-all-notification', authMiddleware, getAllNotificationController)

// Notification Auth||POST
router.post('/delete-all-notification', authMiddleware, deleteAllNotificationController)

// GET ALL DOC
router.get('/getAllDoctors',authMiddleware,getAllDoctorsController)

// BOOK APPOINTMENT
router.post('/book-appointment',authMiddleware,bookAppointmentController)

// Booking availability
router.post('/booking-availability',authMiddleware,bookingAvailabilityController)

// Appointments list
router.get('/user-appointments',authMiddleware,userAppiontmentsController)


module.exports=router;

