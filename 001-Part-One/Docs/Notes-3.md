# 4. Database Integration with Prisma

## Setting Up Prisma

- When working with **Prisma** in VS Code, we can install the **Prisma extension**.

- Prisma comes with a command-line interface (CLI), so we can use it with **npx**.

- Using `npx prisma`, we can see the available commands.

- `npx prisma init` - Initialize Prisma in a project,

## Creating Migrations

- `npx prisma migrate dev` – for SQL databases

- `npx prisma db push` – for NoSQL databases or when you want to sync the Prisma schema without creating a migration file

## Creating a Prisma Client

To work with the database, we need a **Prisma Client**.

As a best practice, we should ensure that only a **single instance** of the Prisma Client is running in our application. Otherwise, it may throw an error saying _“Too many Prisma Clients”_.

This happens because multiple instances can be created during hot reloading or when the application restarts frequently in development.To prevent this issue, we can reuse an existing Prisma Client instance instead of creating a new one — following the pattern recommended in the official documentation.

## Getting Data

#### Automatic Way to generate prisma client (Without mentioning output path)

```bash
generator client {
  provider = "prisma-client-js" # use this package
}
```

run `npx prisma generate`

This is the **standard setup**, and it will generate your client automatically into: `node_modules/@prisma/client`
