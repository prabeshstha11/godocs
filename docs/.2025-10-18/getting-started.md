# What is Go?

- Go, also called Golang, is a statically typed, compiled programming language created by Google in 2009.
- Designed for simplicity, speed and concurrency. Perfect for backedn development, cloud services, and system tools.
- Main strengths: fast compilation, built-in concurrency (`goroutines`), garbage collection, and simple syntax.

## Key Design Goals

Go was built with the following principles in mind:

1. Simplicity: Minimalist syntax with few keywords and constructs.
2. Efficiency: Fast compilation and execution.
3. Concurrency: Built-in support for concurrent programming.
4. Scalability: Suitable for building large-scale, distributed systems.
5. Readability & Maintainability: Code that is easy to read, write, and maintain by teams.

## Core Features

1. Statically Typed & Compiled

    - Go code is compiled directly to machine code, resulting in fast, standalone binaries with no runtime dependencies.
    - Type safety is enforced at compile time, reducing runtime errors.

2. Garbage Collection

    - Automatic memory management reduces the risk of memory leaks while maintaining performance.

3. Concurrency with Goroutines and Channels

    - Goroutines: Lightweight threads managed by the Go runtime (not the OS), enabling thousands of concurrent tasks with minimal overhead.
    - Channels: Typed conduits for safe communication between goroutines, following the CSP (Communicating Sequential Processes) model.

4. Standard Library

    - Rich and well-documented standard library covering:
        - HTTP servers and clients
        - JSON/XML parsing
        - Cryptography
        - File I/O
        - Testing and benchmarking
        - Much more... often eliminating the need for third-party dependencies.

5. Fast Compilation

    - Designed for large codebases; compiles quickly even for complex projects.

6. Cross-Platform Support

    - Can compile binaries for different operating systems and architectures (e.g., Windows, Linux, macOS, ARM) from a single codebase.

7. No Classes or Inheritance

    - Go uses structs and interfaces for composition over inheritance.
    - A type automatically satisfies an interface if it has all the methods that the interface requires.

8. Error Handling

    - Go uses explicit error returns rather than exceptions, encouraging developers to handle errors directly.

---

Go provides a balance between developer productivity and system performance, making it a top choice for modern backend and infrastructure software. Install Go from <https://golang.org/dl/>
