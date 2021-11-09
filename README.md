# ManageBlue-Backend
Backend Service for the ManageBlue App.

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


