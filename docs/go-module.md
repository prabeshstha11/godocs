# Go Module

A module is a collection of related Go packages that are versioned together as a single unit. Each module is defined by a `go.mod` file located in the project's root directory.

Go Workspaces which was introduced in Go 1.18, workspaces allow you to work with multiple Go modules simultaneously. A workspace is defined by a `go.work` file, which specifies the modules included in the workspace.

## Setting up a Go Workspace

1. Create a workspace directory:

    ```bash
    mkdir [myworkspace]
    cd [myworkspace]
    ```

2. Initialize Modules

    ```bash
    mkdir [module1]
    cd [module1]
    go mod init [example.com/module1]
    ```

3. Initialize Workspace

    ```bash
    cd ..
    go work init [./module1] [./module2]
    ```

4. Edit Workspace

    ```bash
    go work edit -fmt
    ```

## Managing Dependencies

1. Adding Dependencies

    ```bash
    go get [example.com/some/dependency]
    ```

2. Cleaning Dependencies

    ```bash
    go mod tidy
    ```

3. Synchronizing Workspace

    ```bash
    go work sync
    ```

## What is `go mod` for?

`go mod` is a Go's module management system. It is like `npm init` in node js, `pip` or `uv sync` in python. It keeps track of the module's name, go version used, all the dependencies and their versions, checksums to verify integrity.

When you run:

```bash
go mod init example.com/hello
```

Go creates a `go.mod` file like this:

```go
module example.com/hello

go 1.25
```

When you add a dependency with `go get`, Go updates the `go.mod` file automatically.

```go
require(
    github.com/user/project v0.1.1
)
```

## Example

```console
myworkspace/
│
├── go.work
│
├── module1/
│   ├── go.mod
│   └── main.go
│
└── module2/
    ├── go.mod
    └── utils.go
```

Then run:

```bash
go work init ./module1 ./module2
```

The `go.work` will look like

```go
go 1.25

use (
    ./module1
    ./module2
)
```

## Summary

| Command        | Purpose                                      |
| -------------- | -------------------------------------------- |
| `go mod init`  | Initializes a new module (creates `go.mod`). |
| `go mod tidy`  | Cleans unused deps and adds missing ones.    |
| `go get`       | Adds or updates a dependency.                |
| `go work init` | Creates a workspace with multiple modules.   |
| `go work sync` | Syncs module dependencies with workspace.    |
