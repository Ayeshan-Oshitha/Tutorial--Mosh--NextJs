# 3. Routing and Navigation

## Routing Overview

In Next.js, there is a built-in router that is based on the file system.

<img src="./images/image-10.png" width="200">

To make a route publicly accessible, we need to use `a page` file inside that folder. `layout` files are used to define a common layout for the pages.

## Dynamic Routes

- params in dynamic routes (like `[id]`) is now **asynchronous** in Next.js 15 and later.

- So, instead of accessing params.id synchronously inside your component, you now have to await it — because params is provided as a Promise
