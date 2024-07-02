# Use the official PostgreSQL image from Docker Hub
FROM postgres:13

# Environment variables
ENV POSTGRES_USER requ
ENV POSTGRES_PASSWORD 1234

# Copy initialization scripts to the Docker entrypoint directory
# This is useful for initializing the database with custom scripts
COPY ./init-scripts/ /docker-entrypoint-initdb.d/

# Expose the PostgreSQL port
EXPOSE 5432

# By default, Docker will run CMD ["postgres"] from the base image
# This starts PostgreSQL server automatically
