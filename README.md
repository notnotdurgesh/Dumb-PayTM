# Money Transfer Application with Secure Authentication

## Overview
This repository hosts a robust money transfer application built using modern web technologies. The application employs React for the frontend, Express for the backend, and Tailwind CSS for sleek and responsive styling. Users can securely sign up, log in, and execute money transfers between accounts.

## Features
- **User Authentication**: Seamless sign-up and login functionalities ensure secure access to the application.
- **Secure Money Transfer**: Users can confidently transfer funds between accounts with robust security measures in place.
- **Responsive Design**: The application boasts a responsive design crafted with Tailwind CSS, providing an optimal user experience across devices.

## Technologies Utilized
- **React**: A leading frontend JavaScript library renowned for crafting dynamic user interfaces.
- **Express**: A flexible and minimal Node.js web application framework, perfect for building scalable APIs.
- **Tailwind CSS**: A utility-first CSS framework enabling rapid development of custom designs and layouts.
- **Node.js**: The JavaScript runtime environment that powers the application's server-side functionality.
- **MongoDB**: A reliable NoSQL database chosen for securely storing user account details and transaction data.

## Getting Started
To run this application locally, please follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/notnotdurgesh/Dumb-PayTM.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd DumbpayTM
   ```

3. **Install Dependencies**:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

4. **Set Up Environment Variables**:
   - Create a `.env` file in the `backend` directory.
   - Define variables such as `MONGODB_URI` and `JWT_SECRET`.

5. **Start the Backend Server**:
   ```bash
   cd backend
   node index.js
   ```

6. **Start the Frontend Server**:
   ```bash
   npm run dev
   ```

## Contributing
Contributions are highly encouraged! To contribute to this project, please adhere to the following guidelines:
- Fork the repository.
- Create a new branch for your feature (`git checkout -b feature/your-feature`).
- Commit your changes (`git commit -m 'Add some feature'`).
- Push your changes to the branch (`git push origin feature/your-feature`).
- Open a pull request for review.

Your contributions will be warmly welcomed and appreciated!
