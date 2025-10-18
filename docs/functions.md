# Functions

A function is a block of code that performs a specific task. It can take inputs and return outputs.

```go
func functionName(parameterName type) returnType {
    // code
    return value
}
```

| Function Type              | Explanation                                                                      |
| -------------------------- | -------------------------------------------------------------------------------- |
| **Simple Function**        | Performs a task with parameters and returns a single value.                      |
| **Multiple Parameters**    | Accepts two or more parameters, optionally of the same type.                     |
| **Multiple Return Values** | Returns more than one value, often used with `error` handling.                   |
| **Named Return Values**    | Gives names to return values, allowing `return` without explicitly listing them. |
| **Variadic Function**      | Accepts a variable number of arguments using `...` syntax.                       |
| **Functions as Values**    | Functions can be assigned to variables or passed as arguments.                   |
| **Anonymous Function**     | A function with no name, often used inline or for callbacks.                     |
| **Deferred Function**      | Executes after the surrounding function finishes, useful for cleanup tasks.      |

Example

```go
package main

import "fmt"

// 1. Simple Function
func greet(name string) string {
    return "Hello, " + name
}

// 2. Multiple Parameters
func add(a, b int) int {
    return a + b
}

// 3. Multiple Return Values
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("cannot divide by zero")
    }
    return a / b, nil
}

// 4. Named Return Values
func getEmployee() (name string, age int) {
    name = "Alice"
    age = 28
    return
}

// 5. Variadic Function
func sumAll(nums ...int) int {
    total := 0
    for _, n := range nums {
        total += n
    }
    return total
}

// 8. Deferred Function
func cleanup() {
    fmt.Println("Cleaning up resources...")
}

func main() {
    // 1. Simple Function
    fmt.Println(greet("Bob"))

    // 2. Multiple Parameters
    fmt.Println("Sum:", add(5, 10))

    // 3. Multiple Return Values
    result, err := divide(10, 2)
    if err != nil {
        fmt.Println(err)
    } else {
        fmt.Println("Division:", result)
    }

    // 4. Named Return Values
    name, age := getEmployee()
    fmt.Println("Employee:", name, "Age:", age)

    // 5. Variadic Function
    fmt.Println("Total Score:", sumAll(10, 20, 30, 40))

    // 6. Functions as Values
    greeter := greet
    fmt.Println(greeter("Charlie"))

    // 7. Anonymous Function
    square := func(x int) int { return x * x }
    fmt.Println("Square of 5:", square(5))

    // 8. Deferred Function
    defer cleanup()
    fmt.Println("Program running...")
}
```

Output:

```console
Hello, Bob
Sum: 15
Division: 5
Employee: Alice Age: 28
Total Score: 100
Hello, Charlie
Square of 5: 25
Program running...
Cleaning up resources...
```

Learn more...

- <https://www.programiz.com/golang/function>
- <https://go101.org/article/function.html>
