# Variables and Constants

Variable store values that can change. Go has explicit, inferred and shorthand declarations.

## Explicit Declaration

```go
package main

import "fmt"

func main() {
    var luffy string = "idiot"
    var zoro int = 3
    fmt.Println(luffy, zoro)
}
```

- `var` declares a variable
- must specify type (string, int, bool, etc)
- <https://www.programiz.com/golang/data-types>

## Type Inference

- go can figure out type automatically

```go
package main

import "fmt"

func main() {
    var nami = "cat burglar" // Go infers string
    var sanji = 1           // Go infers int
    fmt.Println(nami, sanji)
}
```

## Short Variable Declaration

the most common in go.

```go
package main

import "fmt"

func main() {
    luffy := "baka"
    chopper := 11
    fmt.Println(luffy, chopper)
}
```

## Multiple Variable Declaration

```go
package main

import "fmt"

func main() {
    var ace, sabo int = 20, 22
    nami, robin := "Navigator", "Archaeologist"
    fmt.Println(ace, sabo, nami, robin)
}
```

## Constants

Constants are the value that cannot change after being declared.

```go
const pi = 3.1415
```

## `iota`

- A Go predeclared identifier used in constant declarations. It starts at `0` in a const block and increments by `1` automatically for each line. It is great for enums, flags or sequential constants.
- Think of it as an automatic counter that starts at 0 for the first constant in the block and increments by 1 for each new line.

```go
const (
    A = iota // 0
    B        // 1
    C        // 2
)
```

```go
const (
    KB = 1 << (10 * iota) // 1 << 0 = 1 byte
    MB                     // 1 << 10 = 1024 bytes
    GB                     // 1 << 20 = 1,048,576 bytes
)
```

- You don’t have to manually label each variables; `iota` just increments automatically.
