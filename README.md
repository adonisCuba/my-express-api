# My Express API

This project is a RESTful API built with Express that allows users to send emails using Gmail. 

## Features

- Send emails to any recipient using a specified subject and text body.
- Simple and easy-to-use API endpoints.

## Project Structure

```
my-express-api
├── src
│   ├── app.ts                # Entry point of the application
│   ├── controllers
│   │   └── emailController.ts # Logic for sending emails
│   ├── routes
│   │   └── emailRoutes.ts     # Routes for email-related endpoints
│   └── types
│       └── index.ts           # Type definitions for requests and responses
├── package.json               # NPM dependencies and scripts
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-express-api
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Set up your Gmail account to allow less secure apps or use OAuth2 for authentication.

4. Update the email configuration in `src/controllers/emailController.ts` with your Gmail credentials.

5. Start the server:
   ```
   npm start
   ```

## Usage

To send an email, make a POST request to the `/send-email` endpoint with the following JSON body:

```json
{
  "recipient": "recipient@example.com",
  "subject": "Your Subject",
  "text": "Email body text"
}
```

## License

This project is licensed under the MIT License.