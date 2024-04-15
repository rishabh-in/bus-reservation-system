import express from 'express';
import { handleAuthCheck, handleUserLogin, handleUserLogout, handleUserPasswordChange, handleUserProfile, handleUserProfileUpdate, handleUserSignUp } from '../controller/auth.controller.js';
const router = express.Router();

router.get("/auth/check/:authToken", handleAuthCheck)
router.post("/login", handleUserLogin);
router.post("/signup", handleUserSignUp);
router.get("/user/profile", handleUserProfile);
router.put("/update/profile", handleUserProfileUpdate);
router.put("/update/password", handleUserPasswordChange);
router.post("/logout", handleUserLogout);

export default router;