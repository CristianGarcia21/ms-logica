import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

interface EmailData {
    subject: string;
    recipient: string;
    body_html: string;
}

class NotificationService {
    private baseUrl: string;

    constructor() {
        this.baseUrl = process.env.EMAIL_SERVICE_URL || '';
    }

    public async sendEmail(emailData: EmailData): Promise<void> {
        try {
            const response = await axios.post(`${this.baseUrl}/send-email`, emailData);
            console.log('Correo enviado correctamente:', response.data);
        } catch (error) {
            console.error('Error al enviar el correo:', error.response?.data || error.message);
        }
    }
}

export default NotificationService;
