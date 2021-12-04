# ManageBlue-Microservice-Projects
Backend microservice for projects of the ManageBlue App.

## Models

**Project:**
- title (String 64)*
- description (String 1024)*
- active (Bool)*
- members ([User])*
- auto: createdAt(Date)
- auto: updatedAt(Date)


## API (`/api/version`)

### `/projects`
- `/:id` (GET) - Return project by ID
- `/` (GET) - Return all projects (matching query parameters)
- `/` (POST) - Create new project
- `/:id` (PUT) - Update project by ID
- `/:id` (DELETE) - Delete project by ID

## CONFIG ENV variables
- `PORT` - server port
- `URL` - url to server
- `MONGODB_CLOUD_URI` - url to mongodb
- `TASK_API` - url to tasks microservice
- `JWT_SECRET` - jwt secret


