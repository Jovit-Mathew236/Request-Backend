# Request

Request Management Form for College Students and Faculties

## Table of Contents

- [Request](#request)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Using pnpm](#using-pnpm)
    - [Using npm](#using-npm)
    - [Using bun](#using-bun)
    - [Using Docker](#using-docker)
  - [Setup](#setup)
    - [Using pnpm](#using-pnpm-1)
    - [Using npm](#using-npm-1)
    - [Using bun](#using-bun-1)
    - [Using Docker](#using-docker-1)
    - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
    - [Using pnpm](#using-pnpm-2)
    - [Using npm](#using-npm-2)
    - [Using bun](#using-bun-2)
    - [Using Docker](#using-docker-2)

## Installation

### Using pnpm

```bash
pnpm install
```

### Using npm

```bash
npm install
```

### Using bun

```bash
bun install
```

### Using Docker

To set up the application with Docker, ensure you have Docker installed and running. Use the following command in your project's root directory:

```bash
docker-compose up
```

This command will start the PostgreSQL container and any other services defined in your `docker-compose.yml` file.

## Setup

After installing the dependencies, you need to generate the Prisma client, run the migrations, and seed the database.

### Using pnpm

```bash
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed
```

### Using npm

```bash
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed
```

### Using bun

```bash
bun prisma generate
bun prisma migrate dev --name init
bun prisma db seed
```

### Using Docker

Ensure that your Docker containers are running. You can execute the following commands inside your Docker container:

```bash
docker exec -it <container_name_or_id> npx prisma generate
docker exec -it <container_name_or_id> npx prisma migrate dev --name init
docker exec -it <container_name_or_id> npx prisma db seed
```

Replace `<container_name_or_id>` with the actual name or ID of your Docker container.

### Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

```env
DATABASE_URL="postgres://username:password@localhost:5432/database"
JWT_SECRET="your-secret-key"
```

Replace `username`, `password`, `database`, and `your-secret-key` with your actual database credentials and a secure secret key.

## Running the Application

### Using pnpm

```bash
pnpm start:dev
```

### Using npm

```bash
npm run start:dev
```

### Using bun

```bash
bun run start:dev
```

### Using Docker

To run the application using Docker:

```bash
docker-compose up app
```

This command will start your application containerized in Docker.

---

Feel free to adjust the commands and details based on your specific project requirements and Docker setup. Let me know if you need any further customization!