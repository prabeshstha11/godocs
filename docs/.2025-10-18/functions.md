# Functions

In Go, a function is a reusable block of code that performs a specific task. It's defined using the keyword `func`.

The general form is:

```go
func functionName(parameters) returnType{
    // logic here
    return value
}
```

Example:

```go
func add(a int, b int) int{
    return a + b
}
```

Then you call it like:

```go
result := add(7,11)
fmt.Println(result)
```

:::tip
`result :=` means you are declaring and initializing a variable at the same time.
It is shorthand for `var result = something`.
This is only allowed inside functions and not at the package level. It automatically infers the variable's type from the value on the right hand side.
:::

## Function parts

1. `func` keyword
2. function name
    - Capitalized name are exported and public. They are accessible from other packages.
    - Lowercase name are unexported and privated. They are only accessible with in the package.

    ```go
    func Add(a int, b int) int {} // exported
    func add(a int, b int) int{} // private
    ```

3. parameters
    - if they have same type you can shorten it.

    ```go
    func greet(name string, age int) {}
    func sum(a, b int) int {}
    ```

4. Return values: can return nothing, can return one value and can also return multiple values.

    ```go
    func hello(){
        fmt.Println("hello")
    }

    func square(x int) int{
        return x * x
    }

    func divide(a, b float64) (float64, error){
        if b == 0{
            return 0, fmt.Errorf("Cannot divide by zero")
        }
        return a/b, nil
    }
    ```

## Multiple Return Values

This is one of Go's signature features.

```go
func getUserInfo() (string, int){
    return "Luffy", 19
}
```

We can also ignore a value using `_` (the blank identifier)

```go
_, age := getUserInfo()
fmt.Println(age)
```

## Named Return Values

We can name the return values inside the function signature.

```go
func rectangle(width, height float64) (area, perimeter float64){
    area = width * height;
    perimeter = 2 * (width + height)
    return
}
```

## Variadic Functions

These accept and unknown number of arguments, similar to `*args` in py.

```go
func sum(nums ...int) int{
    total := 0
    for _, n := range nums{
        total += n
    }
    return total
}

fmt.Println(sum(1,2,3,4,5))
```

## Anonymous Functions

We can define functions without names often used as short callbacks or closures.

```go
func(){
    fmt.Println("meow from anonymous function")
}()

// assign to a variable
greet := func(name string){
    fmt.Println("hello", name)
}

greet("nico robin")

// return a function from another function
func multiplier(factor int) func(int) int{
    return func(n int) int{
        return n * factor
    }
}

double := multiplier(2)
fmt.Println(double(5))
```

## Functions as Values

In Go, functions are first class citizens. We can pass them as arguments. We can store them in variables. We can return them from other functions.

```go
func operate(a, b int, op func(int, int) int) int{
    return op(a, b)
}

add := func(x, y int) int {return x + y}
mul := func(x, y int) int {return x * y}

fmt.Println(operate(3, 4, add))
fmt.Println(operate(3, 4, mul))
```

## defer

`defer` runs a function after the surrounding function returns, even if it crashes midway.

```go
func main(){
    fmt.Println("Start")
    defer fmt.Println("the defer will print this at last...")
    fmt.Println("end")
}
```
