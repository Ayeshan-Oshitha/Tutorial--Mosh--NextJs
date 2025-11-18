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

# 7. Authentication with NextAuth

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

## Database Adapters

When we use adapters, NextAuth will automatically store user data in our database when someone logs in.

With a database adapter, NextAuth changes the session management from JWT-based (stored in cookies) to **database-backed sessions**. Without a database adapter, NextAuth manages sessions using JWTs in cookies.

# 8. Sending E-mails

## Setting up React Email

`npm i react-email @react-email/components`

## Previewing Emails

`npm run preview-email` - command used to preview emails (the script is defined in **package.json**).

## Styling Emails

We can style the emails using CSS or Tailwind CSS

# 9. Optimization

## Optimizing Images

In Next.js, we should use the **Next.js** `Image` **component**. Under the hood, it still uses the HTML `<img>` tag, but Next.js automatically **compresses and resizes images** based on the user's device. Therefore, we should prefer using the `Image` component whenever possible.

We should add **public and static assets** to the application in the `public` folder. The `Image` component can automatically convert JPG/PNG images to `WebP` for better performance.

If we want to use **remote images**, we must register the domain inside the Next.js configuration (next.config.js).

For responsiveness, we should provide the `sizes` prop. This helps Next.js decide how to optimize the image for different screen sizes. It _does not affect how the image looks_; it only tells Next.js which versions of the image to serve.

The `Image` component uses **lazy loading by default**, so images are only fetched when they become visible. We can use the `priority` prop to disable lazy loading for important images (such as hero or banner images).

If we use the `fill` layout, the parent element must have _position: relative, fixed, or absolute_.

## Using Third-party Scripts

As part of integrating our application with third-party services, we often need to add their `scripts` to one or more pages (e.g., Google Analytics).

When adding these scripts in Next.js, we can use the `<Script>` component.

The Script component supports four loading strategies:

- afterInteractive – Loads the script after the page becomes interactive.
- beforeInteractive – Loads the script before the page becomes interactive (useful for scripts that must run early).
- lazyOnLoad – Loads the script during the browser’s idle time.
- worker – Loads the script inside a web worker.

## Using Fonts

In the root layout file, we can import fonts using `next/font/google`, which includes hundreds of Google Fonts. This allows us to easily use Google Fonts in our application.

Similarly, we can use **local fonts** as well. First, we must add the font file to our project folder and then import it using the provided structure.

We can also add the imported font to Tailwind using the `variable` keyword, which lets us apply the font anywhere in our application.

## Search Engine Optimization

Whenever we export a `metadata` object from a layout or page file, Next.js automatically includes that metadata inside the `<head>` section of our HTML. Search engines read these meta tags to index our content. To make our pages SEO-friendly, we should ensure that every page has proper metadata.

**opengraph** helps when we share our pages on social media platforms. It allows us to define properties such as title, description, images, and categories that control how the shared link appears.

For some pages that use dynamic routes or query parameters, we need to generate metadata dynamically. To do this, instead of exporting a `metadata` object, we export an `async function generateMetadata(): Promise<Metadata>`
