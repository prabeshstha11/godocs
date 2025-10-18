# Basic Data Types

- Primitive: bool, int, float, complex, string, byte, rune
- Composite: array, slice, map, struct
- Custom types: type aliases for clarity
- Go is strongly typed. There is no automatic conversion between types.
- <https://www.geeksforgeeks.org/go-language/data-types-in-go/>

Example:

```go
package main

import "fmt"

// Custom type alias
type EmployeeID int

// Struct for Employee
type Employee struct {
    ID       EmployeeID
    Name     string
    Age      int
    Salary   float64
    Active   bool
    Email    string
    Skills   []string
}

func main() {
    // Boolean
    officeOpen := true

    // Integer types
    totalEmployees := 3
    var maxEmployees int32 = 10

    // Float
    averageSalary := 55000.50

    // Complex number (maybe representing location coordinates in office)
    officeLocation := complex(10, 20)

    // String
    companyName := "TechCorp Inc."

    // Byte and Rune
    officeCode := byte(101)       // some office identifier
    grade := 'A'                  // quality grade for employee

    // Array
    departments := [3]string{"HR", "Engineering", "Marketing"}

    // Slice
    newHires := []string{"Alice", "Bob", "Charlie"}
    newHires = append(newHires, "Diana")

    // Map
    salaries := map[string]float64{
        "Alice": 50000,
        "Bob":   60000,
        "Charlie": 55000,
    }

    // Struct instances
    emp1 := Employee{
        ID:     1,
        Name:   "Alice",
        Age:    28,
        Salary: 50000,
        Active: true,
        Email:  "alice@techcorp.com",
        Skills: []string{"Go", "Docker", "Kubernetes"},
    }

    emp2 := Employee{
        ID:     2,
        Name:   "Bob",
        Age:    32,
        Salary: 60000,
        Active: false,
        Email:  "bob@techcorp.com",
        Skills: []string{"Python", "AWS", "Terraform"},
    }

    // Output all values
    fmt.Println("Company Name:", companyName)
    fmt.Println("Office Open:", officeOpen)
    fmt.Println("Total Employees:", totalEmployees, "Max Employees:", maxEmployees)
    fmt.Println("Average Salary:", averageSalary)
    fmt.Println("Office Location (complex coords):", officeLocation)
    fmt.Println("Office Code (byte):", officeCode, "Grade (rune):", string(grade))
    fmt.Println("Departments:", departments)
    fmt.Println("New Hires:", newHires)
    fmt.Println("Salaries Map:", salaries)
    fmt.Println("Employee 1:", emp1)
    fmt.Println("Employee 2:", emp2)
}
```
