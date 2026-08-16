# GeoGoHub

## Table of Contents

- [Project Description](#project-description)
- [Project Objective](#project-objective)
- [Live Application](#live-application)
- [Application Screenshots](#application-screenshots)
- [Application Wireframe](#application-wireframe)
- [Technologies Used](#technologies-used)
- [Important Deployment Note](#important-deployment-note)
- [Main Features](#main-features)
- [Database Structure](#database-structure)
- [CRUD Functionality](#crud-functionality)
- [Large Dataset Requirement](#large-dataset-requirement)
- [Build Instructions](#build-instructions)
- [Testing Accounts](#testing-accounts)
- [Tools Used for Testing](#tools-used-for-testing)
- [Challenges Encountered](#challenges-encountered)
- [Known Limitations](#known-limitations)
- [Future Improvements](#future-improvements)
- [Project Highlights](#project-highlights)
- [Developed By](#developed-by)
- [Contact](#contact)
- [License](#license)

---

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

## Project Objective

GeoGoHub demonstrates a full-stack web application built with React, Node.js, Express, Passport.js, and the MongoDB Native Driver. The project showcases secure authentication, role-based authorization, CRUD operations, and an application-based membership workflow for managing exclusive professional events.

---

## Live Application

### Website

[GeoGoHub Live Application](https://geogohub-iteration.onrender.com/)

### GitHub Repository

[GeoGoHub GitHub Repository](https://github.com/ShorenaK/GeoGoHub/tree/final-project-iteration)

### Presentation Deck

[Presentation Slides](https://docs.google.com/presentation/d/13YsUJN9wiZLQY1QgLQalpNRzwHMoEJZx5QglgEJHFKE/edit?usp=sharing)

## Final Project Usability & Design Iteration

This version of GeoGoHub is the final project iteration of the original full-stack application. Three usability studies were conducted with participants representing potential users of a private membership and events platform. Participant names are intentionally omitted from this README.

The studies focused on the Home page, membership application, login experience, member dashboard, event discovery, RSVP management, and navigation. Feedback was reviewed and prioritized so that the most useful and achievable improvements could be incorporated into the final iteration.

### Development Branch

The original GeoGoHub project remains intact on the original branch. A separate `final-project-iteration` branch was created in the same GitHub repository for the usability, accessibility, and design iteration.

The branch was initially created with the possibility of merging the improvements back into the original project. For the final submission, I decided to keep the iteration separate so the original version remains intact and the improvements can be demonstrated and compared independently. A future version may merge the branches after additional development and testing.

### Improvements Implemented

Based on the three usability studies, the final iteration includes:

- **Membership application:** Company or Organization was changed to an optional field.
- **Membership status:** Logged-in users receive clearer membership-status information, including visual treatment for approved, pending, and denied/declined states.
- **Login:** A Show Password control was added so users can verify the password they entered.
- **Event discovery:** Search was added so events can be found by title, category, or location.
- **Event cards:** Card layout and readability were improved, including additional space for event titles and subtle gold category badges.
- **RSVP feedback:** Going, Maybe, and Not Going states are more visually distinct, and success feedback is displayed after an RSVP change.
- **Navigation:** An in-app Back button was added as a temporary usability solution for returning to the previously visited GeoGoHub page.
- **Home page:** Membership benefits were made more visible and the visual hierarchy was strengthened.
- **Member information:** The membership application was expanded with fields for interests/hobbies and a short biography.
- **Design consistency:** Spacing, typography, status colors, button styling, and the green/gold visual identity were refined across the application.

### Navigation and Browser Back Button

GeoGoHub includes React Router (`BrowserRouter`) in the application setup, but most page navigation is currently managed through React state rather than individual URL routes.

During usability testing, a participant expected the browser Back button to return to the previous GeoGoHub page. Because the application uses state-based navigation, the native browser Back button does not always represent navigation within the application.

Due to the limited time available for the final project iteration, the application was not fully migrated to route-based navigation. Instead, an in-app **Back** button was implemented as a temporary usability improvement. A future version should migrate page navigation fully to React Router so browser Back/Forward navigation and page-specific URLs work naturally.

### Improvements Reserved for Future Development

The following suggestions were valuable but were intentionally not implemented in this iteration:

- **Event images:** Event-specific imagery was explored but not added. The application currently uses Render's free service tier, so this iteration prioritized performance and avoided adding multiple large image assets. A future version should use optimized/compressed images and an appropriate image-hosting strategy.
- **Profile photo upload:** This requires additional file-upload, storage, validation, and profile-management functionality and was outside the scope of the final iteration.
- **Full React Router migration:** Native browser Back/Forward behavior and page-specific URLs should be implemented in a future version.
- **Application communication:** Future versions can provide email confirmation after an application is received, an estimated review timeframe, and approval/decline notifications.
- **External authentication:** Google, Microsoft, or similar sign-in options could make account access easier in a future version.

---


### Usability Iteration — Before and After Evidence

The screenshots below document several changes made after the three usability studies.

#### Home Page Visual Hierarchy and Membership Benefits

**Before:**

![Original GeoGoHub Home Page](./frontend/public/images/original_home.png)

**After:**

![Improved GeoGoHub Home Page](./frontend/public/images/changes_HOMe.png)

The final iteration strengthens the visual hierarchy and makes membership benefits more visible on the Home page.

#### Event Search

**Before:**

![Original Events Page Without Search](./frontend/public/images/orignal_searchevent.png)

**After:**

![Events Page With Search](./frontend/public/images/cahgnesSearchedevent.png)

A search field was added so users can find events by title, category, or location.

#### In-App Back Navigation

**Before:**

![Original Events Page Without Back Button](./frontend/public/images/origina_no_back_button.png)

**After:**

![Events Page With Back Button](./frontend/public/images/changed_back_button.png)

An in-app Back button was added as a temporary usability improvement while full route-based browser navigation remains a future enhancement.

#### RSVP Feedback and Status Visibility

**Before:**

![Original RSVP Interface](./frontend/public/images/original_rsvp.png)

**After:**

![Improved RSVP Interface](./frontend/public/images/changes_RSVP.png)

The RSVP interface now provides clearer Going, Maybe, and Not Going states and visible feedback after a status change.

#### Membership Application

**Before:**

![Original Membership Application](./frontend/public/images/old_applicationpage_membership.png)

**After:**

![Improved Membership Application](./frontend/public/images/new_applicaion_page-with-membership.png)

The Company or Organization field was made optional, and optional Hobbies and Interests and Short Biography fields were added. The updated form also provides clear submission feedback.

## Application Screenshots

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

### Original Wireframe

![GeoGoHub Original Wireframe](./frontend/public/images/first_wareframe_figma_file.png)

### Final Wireframe

![GeoGoHub Final Wireframe](./frontend/public/images/geogohub_wireframe.png)

The final design implements the following application areas:

- Public Home Page
- Events Page
- Membership Application
- User Login
- Member Dashboard
- Administrator Dashboard

---

## Technologies Used

### Front-End

- React
- React Hooks
- JavaScript (ES6+)
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

---

## Important Deployment Note

GeoGoHub is deployed using Render's free service tier.

The application may take approximately **30–60 seconds** to start after periods of inactivity.

If the website does not load immediately:

1. Wait for the Render service to wake up.
2. Refresh the page.
3. Allow the application a few moments to connect to MongoDB Atlas.

---

## Main Features

- Application-based membership system
- Passport.js authentication
- Secure session management
- Role-based authorization
- Professional event listings
- RSVP management
- Personalized member dashboard
- Administrator dashboard
- Membership application approval workflow

---

## Database Structure

GeoGoHub uses four MongoDB collections:

- Users
- Applications
- Events
- RSVPs

---

## CRUD Functionality

### Create

- Membership applications
- Event RSVPs

### Read

- Events
- User profiles
- Membership status
- RSVPs
- Membership applications

### Update

- Membership approval/decline
- RSVP status
- Events

### Delete

- RSVPs
- Applications
- Events

---

## Large Dataset Requirement

GeoGoHub includes more than **1,000 synthetic MongoDB records** generated with **Mockaroo** for testing and development.

The data was imported into MongoDB Atlas and used to validate database operations and administrator functionality.

---

## Build Instructions

git clone

cd GeoGoHub/backend
npm install

cd ../frontend
npm install

## Configure the required environment variables

### Start the backend
cd ../backend
npm start

### Start the frontend
cd ../frontend
npm run dev
**---**

## The following accounts provided below are for the professor and TA's to test the application.

### Testing Accounts

#### Approved Member Account

\`\`\`text
Email: hborgnol0\@prlog.org
Password: password123
\`\`\`

This account has:

\`\`\`text
Role: Member
Membership Status: Approved
\`\`\`

Use this account to test:

- Member login
- Approved membership status
- Events
- RSVP functionality
- Member dashboard
- Logout

### Administrator Account

\`\`\`text
Email: sscourgieu\@narod.ru
Password: password123
\`\`\`

This account has:

\`\`\`text
Role: Admin
Membership Status: Approved
\`\`\`

Use this account to test:

- Administrator login
- Administrator dashboard
- Membership application review
- Approve functionality
- Decline functionality
- Application totals

---

## Tools Used for Testing

- Chrome Developer Tools
- Google Lighthouse
- Keyboard navigation testing
- Thunder Client
- MongoDB Compass
- ESLint
- Prettier

### Accessibility Testing

The deployed final iteration was tested with **Google Chrome Lighthouse**. The tested deployed page received an **Accessibility score of 100**.

The application was also reviewed for accessibility-related implementation details such as semantic HTML, form labels, visible focus indicators, status/error feedback, standard interactive elements, and keyboard access.

### Lighthouse Evidence

The screenshots below document the Lighthouse test performed on the deployed final iteration.

![GeoGoHub Lighthouse Overall Report](./frontend/public/images/accessibility_report2.png)

The tested deployment received **100 Performance**, **100 Accessibility**, **96 Best Practices**, and **91 SEO** in this Lighthouse run.

![GeoGoHub Lighthouse Accessibility Details](./frontend/public/images/accessiblity_report.png)

The Accessibility category received a score of **100**, with the automated accessibility audits shown as passed. Lighthouse automated testing does not replace manual accessibility testing, so keyboard navigation and other manual checks were also reviewed.

---

## Challenges Encountered

Some of the primary challenges encountered during development included:

- Implementing Passport.js authentication
- Connecting React to the Express backend
- Managing user roles and membership status
- Preventing duplicate applications
- Connecting RSVP records with users and events
- Generating and testing over 1,000 database records
- Deploying the application using Render and MongoDB Atlas

---

## Known Limitations

GeoGoHub currently uses the default in-memory session store provided by \`express-session\`.

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
- Email confirmation after membership application submission
- Estimated application review timeframe
- Email notifications when an application is approved or declined
- User registration
- Email verification
- Member profile editing
- Profile picture uploads
- Profile editing
- Event category filters
- Event location filters
- Interactive calendar integration
- Event reminder notifications
- Expanded administrator event management
- Administrator RSVP management
- Member messaging
- Improved mobile responsiveness
- Calendar integration

---

## Project Highlights

- Full-stack React, Express, and MongoDB application
- Passport.js authentication
- Role-based authorization
- Membership application workflow
- RSVP management
- Personalized dashboards
- MongoDB Native Driver (without Mongoose)
- Fetch API (without Axios)
- Deploying the complete application using Render and MongoDB Atlas
- Creating a professional interface inspired by Georgia's professional and cultural community
- Usability-driven iteration based on three participant studies
- Lighthouse Accessibility score of 100 on the tested deployed page

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

[Email Me](mailto\:shorenaanzhilov\@gmail.com)

---

## License

This project is licensed under the MIT License.
