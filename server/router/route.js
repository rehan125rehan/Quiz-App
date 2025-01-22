import { Router } from "express";
export const router = Router();

import * as controller from '../controllers/controller.js';
import { login, signup } from "../controllers/AuthController.js";
// import * as AuthController from '../controllers/AuthController.js';
import { signupValidation, loginValidation } from '../Middlewares/AuthValidation.js';
/** Questions Routes API */

router.route('/questions')
        .get(controller.getQuestions) /** GET Request */
        .post(controller.insertQuestions) /** POST Request */
        .delete(controller.dropQuestions) /** DELETE Request */

router.route('/result')
        .get(controller.getResult)
        .post(controller.storeResult)
        .delete(controller.dropResult)



router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);


