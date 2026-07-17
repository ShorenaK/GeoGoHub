# GeoGoHub

## Project Description

GeoGoHub is a full-stack web application for a curated private members club in the Republic of Georgia.

The platform is designed for established professionals, entrepreneurs, founders, investors, creatives, executives, and community leaders who want to build meaningful personal and professional relationships through exclusive social, cultural, and networking events.

The inspiration for GeoGoHub comes from my birth country, the Republic of Georgia. Georgia has a growing professional, entrepreneurial, and creative community, and GeoGoHub provides a centralized platform where selected members can discover and attend curated gatherings.

Unlike open event platforms, GeoGoHub uses an application-based membership system. Visitors may apply to join the club, while administrators review each application and approve or decline prospective members.

Approved members can browse private events, RSVP to gatherings, and manage their attendance through a personalized dashboard.

Examples of events featured on the platform include:

- Founder dinners
- Business roundtables
- Professional networking events
- Golf gatherings
- Cultural experiences
- Private discussions
- Card nights
- Community events

GeoGoHub combines membership management, event discovery, authentication, administration, and RSVP functionality in one full-stack application.

The final application includes the following primary pages:

- Home Page
- Events Page
- Membership Application Page
- Login Page
- Member Dashboard
- Administrator Dashboard

---

## Live Application

### Website

[GeoGoHub Live Application](https://geogohub.onrender.com/)

### GitHub Repository

[GeoGoHub GitHub Repository](https://github.com/ShorenaK/GeoGoHub)

---

## Website Preview

### Home Page

![GeoGoHub Home Page](./frontend/public/images/home_page.png)

### Events Page

![GeoGoHub Events Page](./frontend/public/images/event_page.png)

### Membership Application Page

![GeoGoHub Membership Application Page](./frontend/public/images/membership_application_page.png)

### Login Page

![GeoGoHub Login Page](./frontend/public/images/member_login_page.png)

### Member Dashboard

![GeoGoHub Member Dashboard](./frontend/public/images/member_dashboard_page.png)

### Administrator Dashboard

![GeoGoHub Administrator Dashboard](./frontend/public/images/admin_page.png)

---

## Application Wireframe

Original wireframe

![GeoGoHub Application Wireframe](./frontend/public/images/first_wareframe_figma_file.png)

The final wireframe presents the primary pages and user flows implemented in GeoGoHub.

![GeoGoHub Application Wireframe](./frontend/public/images/geogohub_wireframe.png)

The wireframe illustrates the main application areas:

- Public home page
- Event discovery
- Membership application workflow
- User login
- Approved-member dashboard
- Administrator application-management dashboard

---

## Technologies Used

### Front-End

- React
- React Hooks
- JavaScript ES6+
- HTML5
- CSS3
- Vite
- PropTypes
- Fetch API

### Back-End

- Node.js
- Express.js
- Passport.js
- Passport Local Strategy
- Express Session
- MongoDB Native Driver

### Database

- MongoDB Atlas

### Development Tools

- Visual Studio Code
- Git
- GitHub
- npm
- MongoDB Compass
- Thunder Client
- Browser Developer Tools
- ESLint
- Prettier
- Mockaroo

### Deployment

- Render
- MongoDB Atlas

The React frontend and Express backend are deployed together as one Render web service. MongoDB Atlas provides the cloud-hosted database.

---

## Important Deployment Note

GeoGoHub is deployed using Render's free service tier.

Free Render services may spin down after periods of inactivity. As a result, the application may take approximately 30–60 seconds to start when it is opened for the first time.

If the website does not load immediately:

1. Wait for the Render service to wake up.
2. Refresh the page.
3. Allow the application a few moments to connect to MongoDB Atlas.

After the service finishes starting, authentication, membership applications, event browsing, RSVP functionality, and dashboard features should operate normally.

---

## Main Features

### Membership Application

Visitors can submit an application to request membership in GeoGoHub.

The application collects information including:

- First name
- Last name
- Email address
- Profession
- Company
- Reason for joining

Required-field validation is performed before the application is submitted.

Duplicate membership applications using the same email address are prevented.

After successful submission, the applicant receives the following confirmation:

> Your membership application was submitted successfully. Our team will review it soon.

### Membership Status Workflow

The Membership page changes according to the user's authentication and membership status:

- Logged-out visitors see the membership application form.
- Users with a pending membership status see a pending application message.
- Approved members see an active membership message rather than the application form.

### Authentication

GeoGoHub uses Passport.js and session-based authentication.

Users can:

- Log in with an existing account
- Access protected member features
- View their dashboard
- Log out securely

### Event Discovery

Users can browse curated GeoGoHub events.

Each event displays information such as:

- Event title
- Description
- Date
- Time
- Location
- Capacity
- Event image

### RSVP Management

Approved members can RSVP to eligible events.

Members can:

- Register their attendance
- View their RSVP records
- Review event information from their dashboard
- Cancel or update attendance where supported

### Member Dashboard

The member dashboard displays personalized account information, including:

- Member name
- Email address
- Membership status
- Account role
- RSVP history
- Event dates and details

### Administrator Dashboard

Administrators have access to a separate dashboard for reviewing membership applications.

Administrators can:

- View submitted applications
- Review applicant information
- View professional background and reason for joining
- Approve membership applications
- Decline membership applications
- View the total number of submitted applications

---

## Database Structure

GeoGoHub uses four main MongoDB collections.

### Users

Stores:

- User account information
- First and last name
- Email address
- Password information
- User role
- Membership status
- Login-related information

### Applications

Stores:

- Applicant details
- Professional background
- Company information
- Reason for joining
- Application status
- Submission date

### Events

Stores:

- Event title
- Description
- Date
- Time
- Location
- Category
- Capacity
- Image URL
- Additional event information

### RSVPs

Stores:

- Member ID
- Event ID
- RSVP status
- Creation date
- Update date

---

## CRUD Functionality

GeoGoHub includes Create, Read, Update, and Delete operations through its frontend and backend features.

### Create

- Visitors can create membership applications.
- Approved members can create event RSVPs.
- Event records can be created through the backend event routes.

### Read

- Users can view their account information.
- Users can view their membership status.
- Members can browse events.
- Members can view their RSVPs.
- Administrators can review membership applications.

### Update

- Administrators can approve or decline membership applications.
- RSVP records can be updated.
- Event records can be updated through the backend routes.

### Delete

- Members can cancel or delete RSVP records.
- Application and event records support deletion through the appropriate backend routes.

---

## Large Dataset Requirement

To satisfy the project requirement for working with a large dataset, GeoGoHub was populated with more than 1,000 generated records.

Mockaroo was used to generate realistic test data for application development and database testing.

The generated data was:

- Exported as JSON
- Inserted through project seed scripts
- Imported into MongoDB
- Tested with the Express backend
- Reviewed using MongoDB Compass
- Used to validate the administrator and database features

The deployed application uses MongoDB Atlas as its production database.

---

## Testing Accounts

The following demonstration accounts are provided for the professor and teaching assistants to test the application.

### Approved Member Account

```text
Email: hborgnol0@prlog.org
Password: password123
```

This account has:

```text
Role: Member
Membership Status: Approved
```

Use this account to test:

- Member login
- Approved membership status
- Events
- RSVP functionality
- Member dashboard
- Logout

### Administrator Account

```text
Email: sscourgieu@narod.ru
Password: password123
```

This account has:

```text
Role: Admin
Membership Status: Approved
```

Use this account to test:

- Administrator login
- Administrator dashboard
- Membership application review
- Approve functionality
- Decline functionality
- Application totals

> These accounts contain demonstration data and are provided only for academic project testing.

---

## Tools Used for Testing

- Thunder Client
- MongoDB Compass
- Browser Developer Tools
- ESLint
- Prettier
- Node.js
- Express.js
- MongoDB Native Driver
- Render deployment logs

---

## Challenges Encountered

Some of the primary challenges encountered during development included:

- Implementing session-based authentication with Passport.js
- Connecting the React frontend to the Express backend
- Creating protected member and administrator routes
- Managing different user roles and membership statuses
- Preventing duplicate membership applications
- Connecting RSVP records to both users and events
- Displaying populated event information in the member dashboard
- Creating separate member and administrator dashboard experiences
- Generating and testing a dataset containing more than 1,000 records
- Configuring MongoDB Atlas network access
- Configuring environment variables securely
- Deploying the frontend and backend together on Render

---

## Known Limitations

GeoGoHub currently uses the default in-memory session store provided by `express-session`.

Although the browser session cookie is configured to last for up to 30 days, server-side sessions may be lost when the Render service:

- Restarts
- Redeploys
- Spins down because of inactivity

Users may therefore need to log in again after the application restarts.

A persistent MongoDB- or Redis-backed session store is planned as a future improvement.

The administrator dashboard currently focuses primarily on reviewing and updating membership applications. Additional event-management controls may be added in a future version.

---

## Future Improvements

Planned future enhancements include:

- Persistent MongoDB- or Redis-backed session storage
- Forgot-password functionality
- Password-reset functionality
- Show-or-hide password control on the login page
- Email confirmation after membership application submission
- Estimated application review timeframe
- Email notifications when an application is approved or declined
- User registration
- Email verification
- Member profile editing
- Profile picture uploads
- Advanced event search
- Event category filters
- Event location filters
- Interactive calendar integration
- Event reminder notifications
- Expanded administrator event management
- Administrator RSVP management
- Member messaging
- Improved mobile responsiveness

---

## Project Highlights

Some accomplishments I am particularly proud of include:

- Building a complete full-stack React, Express, and MongoDB application
- Implementing Passport.js authentication
- Creating separate member and administrator experiences
- Developing an application-based membership workflow
- Implementing approval and decline functionality for administrators
- Building RSVP functionality connected to users and events
- Creating personalized member dashboards
- Preventing duplicate membership applications
- Using the MongoDB Native Driver without Mongoose
- Using the Fetch API without Axios
- Generating and testing more than 1,000 database records
- Deploying the complete application using Render and MongoDB Atlas
- Creating a professional interface inspired by Georgia's professional and cultural community


---

## Developed By

**Shorena K. Anzhilov**

### GitHub

[ShorenaK](https://github.com/ShorenaK)

### LinkedIn

[Shorena K. Anzhilov](https://www.linkedin.com/in/shorenaanzhilov/)

---

## Contact

Questions and feedback are welcome.

[Email Me](mailto:shorenaanzhilov@gmail.com)

---

## License

This project is licensed under the MIT License.