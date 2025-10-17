# godocs

A documentation for learning Go built with **VitePress**.

## Setup

Make sure you have [Bun](https://bun.sh/) installed.

## Scripts

- Fork and clone this repository:

    ```bash
    git clone [...] [name]
    cd [name]
    ```

- Start dev server:  

    ```bash
    bun add -D vitepress@next
    bun run docs:dev
    ```

- Build and Test:

    ```bash
    bun run docs:build
    bun run docs:preview
    ```

## Contributing

Feel free to improve the docs!
    1. Fork the repo and clone it.  
    2. Run `bun run docs:dev` to start the dev server.  
    3. Edit or add markdown files in the `docs/` folder.  
    4. Commit your changes and open a pull request.
