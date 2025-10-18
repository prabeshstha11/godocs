# Packages and Imports

Every Go file starts with a package declaration at top.

```go
package [name]
```

Example:

```go
package main

// main package defines an executable program
```

Rules

- all files in the same folder should have the same package name.
- packages help organize code, avoid name clashes and make code reusable.

## Importing Packages

Go uses `import` to bring in other packages you want to use.

```go
import "fmt"
```

for using multiple packages at once:

```go
import (
    "fmt"
    "math"
)
```

- packages are imported by path.
- only the exported names (starting with capital letter) are accessible. Eg: `Println`. if the name was `println` that would be private.

## Custom Packages

Create a folder `[name]` with files `[something].go`

```go
package [name]

// public function
func Add(a, b int) int{
    return a + b
}

// private function 
func sub(a, b int) int{
    return a - b
}

// will learn about these in detail in function part
```

after this we can use this in `main.go` and other files:

```go
package main

import (
    "fmt"
    "name"
)

func main() {
    fmt.Println(name.Add(7,11))
}
```

## Rename Import

```go
import m "custompkg"

...

fmt.Println(m.Add(7,11))
```

## Blank Import

to run init functions only

```go
import _ "some/pkg"
```

Example

```go
package main

import (
    _ "github.com/lib/pq" // PostgreSQL driver, just for init()
    "database/sql"
    "fmt"
)

func main() {
    // You never call anything from pq directly,
    // but its init() function registers the driver for sql package
    db, err := sql.Open("postgres", "connection_string")
    if err != nil {
        fmt.Println(err)
    }
    fmt.Println(db)
}
```

- `_` means “ignore the package name”.

## `go get`

- used to download and install packages from remote repositories like github and add them to your projects.

```bash
go get github.com/user/pkg@v1.2.3
```

Example

```bash
go get github.com/fatih/color
```

```go
import "github.com/fatih/color"

func main() {
    color.Cyan("Hello, colorful world!")
}
```

## insights

- `go get` is like `npm install`, `pip install`?
- renaming import is like doing `import numpy as np`
- folder is like package. in py i used `__init__.py`
- each folder is one package in go.
- read this docs: <https://pkg.go.dev/std>
- <https://stackoverflow.com/questions/55807322/can-i-list-all-standard-go-packages>
