# First Program in Go

```go
package main

import "fmt"

func main(){
    fmt.Println("hello world")
}
```

## `package.main`

- Every Go file starts with a package declaration.
- A package is like a namespace or module in other languages. It groups related code together.
- The special package name main tells Go that this file is the entry point of a standalone program (an executable).
- If it were any other package (like math or strings), it would produce a library, not a runnable program.

## `import "fmt"`

- The import keyword lets you use other packages.
- Here, fmt stands for “format,” and it’s part of Go’s standard library.
- fmt provides functions for formatted I/O like printing text to the console, reading input, etc.

## Println

- `Println` prints whatever’s inside the parentheses followed by a newline.
- more print functions:

| Function   | Newline? | Format? | Output         |
| ---------- | -------- | ------- | -------------- |
| `Print`    | No       | No      | Stdout         |
| `Println`  | Yes      | No      | Stdout         |
| `Printf`   | No       | Yes     | Stdout         |
| `Sprintf`  | No       | Yes     | Returns string |
| `Fprint`   | No       | No      | Writer         |
| `Fprintln` | Yes      | No      | Writer         |
| `Fprintf`  | No       | Yes     | Writer         |

Example:

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    fmt.Print("Hello", " ", "Print")
    fmt.Print("\n")

    fmt.Println("Hello", "Println")

    name := "Luffy"
    age := 19
    fmt.Printf("Hello %s, you are %d years old\n", name, age)

    formatted := fmt.Sprintf("Hi %s! Next year you will be %d.", name, age+1)
    fmt.Println(formatted)

    fmt.Fprint(os.Stdout, "Hello Fprint")
    fmt.Fprint(os.Stdout, "\n")

    fmt.Fprintln(os.Stdout, "Hello Fprintln")

    fmt.Fprintf(os.Stdout, "Hello %s! Your age is %d\n", name, age)
}
```

Output:

```console
Hello Print
Hello Println
Hello Luffy, you are 19 years old
Hi Luffy! Next year you will be 20.
Hello Fprint
Hello Fprintln
Hello Luffy! Your age is 19
```
