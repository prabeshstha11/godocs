# Type Conversion and Inference

- <https://go.dev/blog/type-inference>
- <https://golang.ntxm.org/docs/go-language-fundamentals/type-inference-and-type-aliases/>
- <https://www.scalent.io/golang/golang-type-casting-or-type-conversion/>
- <https://www.scaler.com/topics/golang/type-conversion-in-golang/>

Go is strongly typed. You cannot automatically assign a value of one type to a variable of another type. You must explicitly convert between types.

```go
var age int = 25
var height float64 = float64(age)
fmt.Println(height) // 25.0
```
