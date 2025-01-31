export interface EmailRequest {
    recipient: string;
    subject: string;
    text: string;
}

export interface EmailResponse {
    success: boolean;
    message: string;
}