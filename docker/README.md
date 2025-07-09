# Docker Setup

This directory contains Docker configurations for containerizing the portfolio application.

## Quick Start

### Build the Docker image:
```bash
docker build -f docker/Dockerfile -t portfolio:latest .
```

### Run locally with Docker Compose:
```bash
docker-compose up --build
```

### Run in production mode:
```bash
docker-compose up portfolio-frontend
```

## Development

### Development Dockerfile
For development with hot reloading:
```bash
docker build -f frontend/Dockerfile.dev -t portfolio-dev .
docker run -p 3000:3000 -v $(pwd)/frontend:/app portfolio-dev
```

## Configuration

### Dockerfile
- Multi-stage build for optimized production image
- Uses nginx for serving static files
- Includes security headers and compression

### nginx.conf
- Configured for React Router (SPA)
- Gzip compression enabled
- Security headers included
- Static asset caching

### docker-compose.yml
- Production and development services
- Health checks included
- Volume mounting for development

## Best Practices

1. **Multi-stage builds** for smaller production images
2. **Security headers** for protection
3. **Health checks** for monitoring
4. **Caching** for better performance
5. **Non-root user** for security

## Troubleshooting

### Common Issues

1. **Port conflicts**: Change ports in docker-compose.yml
2. **Build failures**: Check Dockerfile syntax and dependencies
3. **Permission issues**: Ensure proper file permissions

### Debug Commands

```bash
# Check running containers
docker ps

# View logs
docker logs <container-name>

# Enter container shell
docker exec -it <container-name> /bin/sh

# Check image layers
docker history <image-name>
``` 