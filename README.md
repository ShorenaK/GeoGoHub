# GeoGoHub
GeoGo Hub will be a full-stack web application for a curated private members club in the Republic of Georgia. The platform is designed for established professionals, entrepreneurs, founders, investors, creatives, and community leaders who want access to exclusive social and networking gatherings.
------



[ProjectProposal] @John Alexis Guerra Gomez

Project 3 Name: "GeoGo Hub" — Curated Private Members Club Platform for Georgia

Team Member: @Shorena K. Anzhilov

Description:
GeoGo Hub will be a full-stack web application for a curated private members club in the Republic of Georgia. The platform is designed for established professionals, entrepreneurs, founders, investors, creatives, and community leaders who want access to exclusive social and networking gatherings.

Unlike open event platforms, GeoGo Hub will not allow every user to create public events. Membership will be application based, and events will be curated by the club admin. Approved members will be able to discover private gatherings such as founder dinners, golf networking events, card nights, cultural gatherings, private discussions, and business roundtables. Members will be able to RSVP to events and manage their attendance.

The application GeoGoHub will use four MongoDB collections:

users
applications
events
rsvps

Users Collection:
Stores user account information, role, profile details, membership status, and login-related information.

Applications Collection:
Stores membership applications including applicant details, professional background, reason for joining, application status, and submission date.

Events Collection:
Stores curated event information including event title, description, date, location, category, capacity, image URL, and event details.

RSVPs Collection:
Stores event RSVP information including member ID, event ID, RSVP status, and RSVP date.

CRUD Features:

Create:
Applicants will be able to create membership applications.
Admins will be able to create curated club events.
Members will be able to create RSVPs for events.

Read:
Users will be able to view their profile and application status.
Approved members will be able to browse upcoming private events.
Admins will be able to view membership applications and event RSVPs.

Update:
Applicants will be able to update their membership application before approval.
Admins will be able to approve or reject applications.
Admins will be able to edit event details.
Members will be able to update or cancel their RSVP status.

Delete:
Applicants will be able to withdraw/delete their application.
Admins will be able to delete events.
Members will be able to delete/cancel RSVPs.

User Personas:

1. Professional Member
   A Professional Member is an established business owner, founder, investor, executive, or creative professional in Georgia. They want to join a curated private club where they can meet like-minded people, attend exclusive events, and build meaningful personal and professional relationships.

2. Applicant
   An Applicant is interested in joining GeoGo Hub but must first submit a membership application. They need a way to provide background information, explain why they want to join, and check whether their application has been approved.

3. Club Admin / Founder
   The Club Admin manages the private club experience. They need a way to review membership applications, approve or reject applicants, create curated events, update event details, and manage the event calendar.

User Stories:

1. As an Applicant, I want to submit a membership application so that I can request access to the private members club.

2. As an Applicant, I want to view or update my application status so that I know whether I have been approved.

3. As an Admin, I want to approve or reject membership applications so that the club remains curated.

4. As an Admin, I want to create, edit, and delete curated events so that members can discover exclusive gatherings.

5. As an Approved Member, I want to browse upcoming private events so that I can choose which gatherings to attend.

6. As an Approved Member, I want to RSVP to an event or cancel my RSVP so that I can manage my attendance.

Technology Stack:
Frontend: React with Hooks, HTML, CSS
Backend: Node.js + Express
Database: MongoDB using the native Node.js driver
Authentication: Passport
Data Requests: Fetch API

I will not use Mongoose, Axios, CORS, or other prohibited libraries unless approved.

Implementation:
I will implement the full stack for all user stories, including the React frontend, Express routes, MongoDB database operations, Passport authentication, and deployment.


---- 
git add . 
git commit -m "files added"
git push origin main 


npm run format
npm run lint



https://mockaroo.com/



Your current RSVP model for the project is  accepts:

{
  "status": "maybe"
}

but In a real application, an RSVP should know which user submitted it
which event it's for

So eventually I need to change it making the notes for my self 

{
  "userId": "...",
  "eventId": "...",
  "status": "going",
  "createdAt": "...",
  "updatedAt": "..."
}

this is only to satisfy the rubric assignment. I need to add add userId and eventId later


https://cloud.mongodb.com/v2/6a43ef87fb29f13e7077db6e#/explorer/6a43efb740ce35b86cdc28ee/geogohub/users/find

my Mangoos Atlas 


git add . && git commit -m "Set up React frontend structure" && git push origin main

npm run format
npm run lint   






A fuller membership workflow where applicants can track their status.
Admins can manage membership approvals.
For the current project, ApplicationPage.jsx should behave intelligently:
Logged-out visitors → see the membership application form.
Users with membershipStatus === "pending" → see a pending application message.
Users with membershipStatus === "approved" → see an active membership page instead of the application form.

I did not save temporary implementation details or code—only the long-term project improvement idea, which is the kind of information that's useful to remember across conversations


future improvment forgot the user or the passowrd 

after submitting the ppalication user receves confitiom that applicaion haves n=been submited 

Your membership application was submitted successfully. Our team will review it soon. aproximatlly how mnay days 

also when login ability oto see the passwerd what is entered.



for TA and professor to test it 
user with approved application 
hborgnol0@prlog.org
====================
id
6a56ad7c521eea61cca05804
firstName
"Hetty"
lastName
"Borgnol"
email
"hborgnol0@prlog.org"
password
"password123"
role
"member"
membershipStatus
"approved"


===============================