# Zero Values

In Go, every variable must be initialized. If you don't explicitly assign a value, Go automatically gives it a default value called a zero value. This prevents "undefine" or "null" errors common in other languages.

| Type                                  | Zero Value    | Example Usage                                   |
| ------------------------------------- | ------------- | ----------------------------------------------- |
| **bool**                              | false         | `var active bool` → `false`                     |
| **int, int8, int16…**                 | 0             | `var age int` → `0`                             |
| **uint, byte**                        | 0             | `var count uint` → `0`                          |
| **float32, float64**                  | 0.0           | `var price float64` → `0.0`                     |
| **complex64, complex128**             | 0+0i          | `var c complex64` → `0+0i`                      |
| **string**                            | "" (empty)    | `var name string` → `""`                        |
| **pointer**                           | nil           | `var p *int` → `nil`                            |
| **slice, map, chan, func, interface** | nil           | `var s []int` → `nil`                           |
| **struct**                            | fields zeroed | `var emp Employee` → all fields get zero values |

## `nil`

`nil` is Go's zero value for refrence types. It literally means "nothing" or "no value assigned". `nil` is like `null`, but Go treats it safely and explicitly.

Where you see `nil`

- Pointers → a pointer that doesn’t point anywhere
- Slices → an uninitialized slice
- Maps → an uninitialized map
- Channels → an uninitialized channel
- Functions → a function variable with no assignment
- Interfaces → an interface with no concrete value
