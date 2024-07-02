# Use official Node.js image with LTS version
FROM node:lts-alpine

# Install PostgreSQL client and dependencies
RUN apk add --no-cache postgresql-client

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node.js dependencies
RUN npm install --production

# Copy application code
COPY . .

# Environment variables for PostgreSQL
ENV PGUSER requ
ENV PGPASSWORD 1234
ENV PGHOST localhost
ENV PGPORT 5432
ENV PGDATABASE mydatabase

# Expose port for Node.js application
EXPOSE 3000

# Command to run both PostgreSQL and Node.js application
CMD service postgresql start && npm start
