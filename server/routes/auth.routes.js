import express from 'express';
const router = express.Router();

router.post("/login", handleUserLogin);
router.post("/signup", handleUserSignUp);
router.get("/user/profile", handleUserProfile);
router.put("/update/profile", handleUserProfileUpdate);
router.put("/update/password", handleUserPasswordChange);
router.post("/logout", handleUserLogout);
