# Hello World

Here's the classic "Hello, World!" program in Go:

```go
package main

import "fmt"

func main(){
    fmt.Println("Hello, World!")
}
```

## Breakdown

- `package.main`: Declare this as and executable program (not a library).
- `import "fmt"`: Imports Go's builtin package for formatted I/O like printing to the console.
- `func main()`: The entry point of the program where the execution starts.
- `fmt.Println("Hello, World!")`: Prints the string followed by a newline.

## How to run it

1. Save it to a file, `hello.go`
2. Open your terminal and run:

    ```bash
    go run hello.go
    ```

3. Output

    ```console
    Hello, World!
    ```

4. You can compile it using:

    ```bash
    go build hello.go
    ```

5. Then run it

    ```bash
    ./hello
    ```
