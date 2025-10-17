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
