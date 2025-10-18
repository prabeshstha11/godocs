# Go Workspace and Modules

Originally, Go used a GOPATH workspace, which was basically a single folder where all your Go code lived. `$GOPATH`environment variable defined where Go looked for source files and where it installed binaries. All Go code had to live under `$GOPATH/src`. Import paths were tied to the folder structure. Build commands (`go build`, `go install`) relied heavily on `GOPATH`.

## Go Modules

Modules are now the standard in Go. You don’t need GOPATH anymore and your project can live anywhere.

- Module: A collection of Go packages with a `go.mod` file at its root.
- Package: A folder with `.go` files containing a `package` declaration.
- Dependency: Another module your code imports.

Creating a module

```bash
mkdir [myproject]
cd [myproject]
go mod init [github.com/user/project]
```

This generates a `go.mod` file.

- When you import a package that’s not part of the standard library, Go automatically updates `go.mod` and `go.sum`.
- `go.mod` keeps track of which modules you depend on.
- `go.sum` ensures integrity by extracting versions, hashes, and prevents tampering.

## Commands

| Command                | Description                                                 |
| ---------------------- | ----------------------------------------------------------- |
| `go run <file.go>`     | Compile & run code instantly. Great for quick scripts.      |
| `go build`             | Compile code into an executable for production.             |
| `go install`           | Builds and installs binaries to `GOBIN` or module bin dir.  |
| `go test`              | Runs unit tests (`*_test.go`) in your package.              |
| `go fmt`               | Formats your code automatically. Must for clean Go code.    |
| `go mod init <module>` | Initializes a new Go module (creates `go.mod`).             |
| `go mod tidy`          | Cleans up dependencies in `go.mod` and `go.sum`.            |
| `go get <module>`      | Fetches or updates a dependency module.                     |
| `go list`              | Lists packages or modules. Useful to check imports.         |
| `go doc <package>`     | Shows documentation for packages or symbols.                |
| `go version`           | Shows installed Go version.                                 |
| `go env`               | Shows Go environment variables like `GOPATH`.               |
| `go clean`             | Removes cached object files. Useful during rebuilds.        |
| `go generate`          | Runs code generation commands (`//go:generate`).            |
| `go run .`             | Runs the main package in the current folder (module aware). |
| `go build ./...`       | Builds all packages in the module recursively.              |
| `go test ./...`        | Runs all tests in the module recursively.                   |
| `go mod verify`        | Verifies that dependencies match `go.sum` hashes.           |
| `go mod graph`         | Shows module dependency graph.                              |
| `go mod why <module>`  | Explains why a module is needed by your code.               |

- For indepth learning about cli commands: <https://pkg.go.dev/cmd/go>
