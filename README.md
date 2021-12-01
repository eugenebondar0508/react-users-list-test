[DEMO LINK](https://eugenebondar0508.github.io/react-users-list-test/)


TASKS: 
Test application “Users management”
It is required to create SPA for view, create and update
list of users with an API (below).
Application should has 4 pages:
1. List of users
2. User detail view
3. User create
4. User edit
Users list page should has:
- Basic information about user, such as: first name, last name, DOB, sex
- Option (button) to delete user
- When click on user - should be opened page with user detail view
- Button to add new user
User detail page should has:
- Full information about user, such as: first name, last name, DOB, sox, job, biography
- , enabled/disabled status
- Edit button
- Delete button
Edit/Create pages should have following input fields:
- First name: max len 256
- Last name: max len 256
- DOB: datepicker with format YYYY-MM-DD
- Sex - select with options “make”, “female”
- Job: max len 256
- Biography: text area, max len 1024
- Enabled: checkbox (field in the api: is_active)
All fields are required. Form should be validated before being sent to the server.
For the application it is mandatory to use React.JS. Optionals are: Redux, react-router, axios,
typescript.
Result should be uploaded to git.
API endpoints:
1. List of all users, GET
https://frontend-candidate.dev.sdh.com.ua/v1/contact/
2. Info about user, GET
https://frontend-candidate.dev.sdh.com.ua/v1/contact/:id/
3. Удаление пользователя DELETE
https://frontend-candidate.dev.sdh.com.ua/v1/contact/:id/
4. Create user, POST
https://frontend-candidate.dev.sdh.com.ua/v1/contact/
5. Edit user, PUT
https://frontend-candidate.dev.sdh.com.ua/v1/contact/:id/
