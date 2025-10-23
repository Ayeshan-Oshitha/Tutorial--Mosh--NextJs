# 4. Database Integration with Prisma

## Setting Up Prisma

- When working with **Prisma** in VS Code, we can install the **Prisma extension**.

- Prisma comes with a command-line interface (CLI), so we can use it with **npx**.

- Using `npx prisma`, we can see the available commands.

- `npx prisma init` - Initialize Prisma in a project,

## Creating Migrations

- `npx prisma migrate dev` – for SQL databases

- `npx prisma db push` – for NoSQL databases or when you want to sync the Prisma schema without creating a migration file
