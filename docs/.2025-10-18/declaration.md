# Declaration

A declaration basically names something and optionally defines it. Go has four main types:

- `var`: declares variable
- `const`: declares constant
- `type`: declares new types
- `func`: declares functions

Every program in Go is made of these building blocks.

## Structure of Go

Every `.go` file starts like this:

```go
package main // tells go what package this file belongs to
import "fmt" // imports other package

// then come your declarations: const, var, type, func
```

In this example, the file belongs to the `main` package because it's where the program starts running. So when we write `func main()`, Go looks for that and sees it as the entery point.

## Package level vs Local declarations

```go
const boilingF = 212.0

func main(){
    var f = boilingF
    var c = (f - 32) * 5 / 9
    fmt.Printf("boiling point = %g°F or %g°C", f, c)
}
```

- package level means declared outside any function, accessible anywhere inside that package.
- local means declared inside a function
- if we try to use `f` in another function, Go would throw and error because it's not visible there.
