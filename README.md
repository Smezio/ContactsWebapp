# Contacts Webapp
Full-stack web application for contacts management. The app allows to visualize, add, edit and remove the contacts through API requests.

The application is composed of:
- Single-page application (Angular): after authentication through Auth0, the user can access the dashboard. The dashboard is composed of a table to visualize and manage the contacts, and a button to add a new contact.
- API Backend (Spring Boot): provides CRUD API for contact management at the uri /api/contact. The APIs are accessible only after authentication and check the roles obtained. For this demo, the user is assigned to "admin" role by Auth0 M2M application automatically.

### Entry points
Application: [Vercel](https://contacts-webapp-angular.vercel.app/)

API Host: [Render](https://contactswebapp-api.onrender.com)
- GET /api/contacts -> get all contacts
- POST /api/contacts -> save new contact
- PUT /api/contacts/{id} -> update existing contact
- DELETE /api/contacts/{id} -> delete existing contact by id

A public copy of these endpoints are created on /api/public path.

Further information about API can be fetched from the OpenAPI file:
- JSON: /api/docs 
- UI: /api/docs/index.html

## Future works
- Manage single user contacts
- Implement application tests
