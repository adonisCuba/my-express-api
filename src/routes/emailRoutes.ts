import { Router } from 'express';
import { EmailController } from '../controllers/emailController';

const router = Router();
const emailController = new EmailController();

export function setEmailRoutes(app: Router) {
    app.post('/send-email', emailController.sendEmail.bind(emailController));
}

export default router;