OCS TECH TEAM WEBSITE

The Secure User Data Access System is a web application designed to provide secure access to user data stored in a PostgreSQL database. The system consists of a frontend client and a backend API endpoint hosted on the cloud. Its primary purpose is to enable users to access their data while ensuring that sensitive information such as passwords is handled securely. The application features role-based access control, allowing administrators to view all user data while restricting regular users to their own data only. By implementing proper encryption and server-side processing, the system ensures that raw passwords are never transmitted and user data remains protected.

To use is you have to download the folder of OCS TECH in your local system and run the command "npm run dev" in your system, then go to browser and run localhost:4000 to view the website, to register more users you can register by register page and login by login page. There are some pre existing users and 1 admin of which the details are provided below, only admin can access the manage user page, rest users cant access that page.

1. (admin_test@ocs.com, password) (admin access)
2. (basic_test_user@ocs.com, password123)
3. (lakshya@ocs.com, password)
4. (user1@ocs.com, passwordabc)
5. (user2@ocs.com, password)

The other features are normal login/register page features and can be understood easily, MERN stack tech was used in making of this.

Install these packages beforehand:

      "dependencies": {
        "bcrypt": "^5.1.1",
        "connect-ensure-login": "^0.1.1",
        "connect-flash": "^0.1.1",
        "connect-mongo": "^5.1.0",
        "dotenv": "^16.4.5",
        "ejs": "^3.1.9",
        "express": "^4.18.3",
        "express-session": "^1.18.0",
        "express-validator": "^7.0.1",
        "http-errors": "^2.0.0",
        "mongoose": "^8.2.0",
        "morgan": "^1.10.0",
        "passport": "^0.7.0",
        "passport-local": "^1.0.0"
      }
