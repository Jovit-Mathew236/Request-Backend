# Use official PostgreSQL image from Docker Hub
FROM postgres:13.5

# Environment variables for PostgreSQL setup
ENV POSTGRES_USER requ
ENV POSTGRES_PASSWORD 1234

# Expose PostgreSQL default port
EXPOSE 5432

# Specify volume for persisting PostgreSQL data
VOLUME /var/lib/postgresql/data
