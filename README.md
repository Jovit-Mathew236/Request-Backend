# Request

Request management form for college students and faculties

## Table of Contents

- [Request](#request)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Using pnpm](#using-pnpm)
    - [Using npm](#using-npm)
    - [Using bun](#using-bun)
  - [Setup](#setup)
    - [Using pnpm](#using-pnpm-1)
    - [Using npm](#using-npm-1)
    - [Using bun](#using-bun-1)
    - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
    - [Using pnpm](#using-pnpm-2)
    - [Using npm](#using-npm-2)
    - [Using bun](#using-bun-2)

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

<!-- ## License

This project is licensed under the [LICENSE_NAME] License - see the [LICENSE](LICENSE) file for details.
```

Make sure to replace `[Project Name]`, `[Brief description of your project]`, and `[LICENSE_NAME]` with the actual details of your project. If you have a specific license, replace `[LICENSE_NAME]` with its name. If you don't have a license file, you can remove the "License" section. -->