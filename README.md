# Blog Monorepo

This is a monorepo containing both frontend and backend applications for the blog project.

## Project Structure

```
.
├── frontend/          # Angular frontend application
├── backend/          # Go backend application
└── .github/          # GitHub Actions workflows
```

## Prerequisites

- Node.js (v18 or later)
- Go (v1.21 or later)
- Angular CLI
- Docker (optional, for containerization)

## Development Setup

### Frontend (Angular)

```bash
cd frontend
npm install
ng serve
```

### Backend (Go)

```bash
cd backend
go mod download
go run main.go
```

## Building

### Frontend
```bash
cd frontend
ng build
```

### Backend
```bash
cd backend
go build
```

## Testing

### Frontend
```bash
cd frontend
ng test
```

### Backend
```bash
cd backend
go test ./...
```

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

MIT 