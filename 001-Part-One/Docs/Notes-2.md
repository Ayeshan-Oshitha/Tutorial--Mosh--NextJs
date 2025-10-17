# 3. Routing and Navigation

## Routing Overview

In Next.js, there is a built-in router that is based on the file system.

<img src="./images/image-10.png" width="200">

To make a route publicly accessible, we need to use `a page` file inside that folder. `layout` files are used to define a common layout for the pages.

## Dynamic Routes

- params in dynamic routes (like `[id]`) is now **asynchronous** in Next.js 15 and later.

- So, instead of accessing params.id synchronously inside your component, you now have to await it — because params is provided as a Promise

## Catch-all Segments

- `[...slug]` - This requires **at least one** segment in the URL. (Example: `/docs/a `or `/docs/a/b`)

- `[[...slug]]` - This makes the catch-all segment **optional**. (Example: `/docs`, `/docs/a`, or `/docs/a/b`)

## Accessing qurt parameters.

To access **route parameters**, we use the `params` keyword. To access **query parameters**, we use the `searchParams` keyword. This is the rule in Next.js, and starting from **Next.js 15**, both of these are **asynchronous**.

Note - We can access `params` or `searchParams` only inside **page files**. They cannot be accessed directly inside **components**.

## Layouts

We use layouts to create UI that is shared across multiple pages.

A layout component should have a `children` prop of type `ReactNode`.

## Navigation

<img src="./images/image-11.png" width="400">
