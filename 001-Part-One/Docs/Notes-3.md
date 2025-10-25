# 5. Database Integration with Prisma

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

run - `npx prisma generate`

This is the **standard setup**, and it will generate your client automatically into: `node_modules/@prisma/client`

Note: Every time we make changes to the database schema (and run a migration), we should regenerate the Prisma Client using the following command:

# 6. Uploading Files

## Choosing a Platform

- Amazon s3
- Google Cloud
- Microsoft Azure
- Cloudinary

Out of all the above, **Cloudinary** has the best integration with Next.js. Cloudinary provides a number of React components that can be easily integrated into the project.

## Setting Up Cloudinary

`next-cloudinary` package include all the react componenst that we can use in our project

## Customizing the Uploading widget

If we need to customize the upload widget, we can use https://demo.cloudinary.com/uw/
to configure(preview) it and get the code.

# 6. Authentication with NextAuth

## Protecting Routes

To protect your routes, you should use middleware.

```typescript
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  // *: zero or more
  // +: one or more
  // ?: zero or one
  matcher: ["/users/:id*"],
};
```

To check the login status, Next.js provides built-in NextAuth middleware. If the user is not authenticated, it automatically redirects them to the login page.
