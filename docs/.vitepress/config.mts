import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "golang",
    description: "This docs is made so that I can track my learnings in Go.",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Learn", link: "/getting-started" },
        ],

        sidebar: [
            {
                text: "Introduction to Go",
                collapsed: false,
                items: [
                    { text: "What is Go?", link: "/what-is-go" },
                    { text: "Why Use Go?", link: "/why-use-go" },
                    { text: "Installing Go and Setting Up Environment", link: "/installing-go" },
                    { text: "Your First Go Program", link: "/hello-world" },
                    { text: "Go Workspace and Modules", link: "/go-modules" },
                ],
            },
            {
                text: "Basic Syntax and Structure",
                collapsed: false,
                items: [
                    { text: "Packages and Imports", link: "/packages-imports" },
                    { text: "Variables and Constants", link: "/variables-constants" },
                    { text: "Basic Data Types", link: "/data-types" },
                    { text: "Zero Values", link: "/zero-values" },
                    { text: "Type Conversion and Inference", link: "/type-conversion" },
                    { text: "Functions", link: "/functions" },
                ],
            },
            {
                text: "Control Structures",
                collapsed: false,
                items: [
                    { text: "Conditional Statements", link: "/conditionals" },
                    { text: "Loops", link: "/loops" },
                    { text: "Switch Statements", link: "/switch" },
                    { text: "Defer Statements", link: "/defer" },
                ],
            },
            {
                text: "Composite Data Types",
                collapsed: false,
                items: [
                    { text: "Arrays", link: "/arrays" },
                    { text: "Slices", link: "/slices" },
                    { text: "Maps", link: "/maps" },
                    { text: "Structs", link: "/structs" },
                    { text: "Pointers", link: "/pointers" },
                ],
            },
            {
                text: "Functions",
                collapsed: false,
                items: [
                    { text: "Multiple Return Values", link: "/multiple-return" },
                    { text: "Named Return Values", link: "/named-return" },
                    { text: "Variadic Functions", link: "/variadic" },
                    { text: "Functions as Values", link: "/as-values" },
                    { text: "Closures", link: "/closures" },
                    { text: "Methods", link: "/methods" },
                ],
            },
            {
                text: "Interfaces and Polymorphism",
                collapsed: false,
                items: [
                    { text: "Defining and Implementing Interfaces", link: "/defining" },
                    { text: "Interface Satisfaction (Implicit)", link: "/satisfaction" },
                    { text: "Empty Interface and Type Assertions", link: "/type-assertions" },
                    { text: "Type Switches", link: "/type-switches" },
                    { text: "Interface Best Practices", link: "/best-practices" },
                ],
            },
            {
                text: "Concurrency in Go",
                collapsed: false,
                items: [
                    { text: "Goroutines", link: "/goroutines" },
                    { text: "Channels", link: "/channels" },
                    { text: "Select Statement", link: "/select" },
                    { text: "Worker Pools and Pipelines", link: "/worker-pools" },
                    { text: "Sync Package", link: "/sync" },
                    { text: "Context Package", link: "/context" },
                ],
            },
            {
                text: "Error Handling",
                collapsed: false,
                items: [
                    { text: "Error Type and Custom Errors", link: "/error-type" },
                    { text: "errors.New and fmt.Errorf", link: "/errorf" },
                    { text: "Error Wrapping", link: "/wrapping" },
                    { text: "errors.Is and errors.As", link: "/is-as" },
                    { text: "Panic and Recover", link: "/panic-recover" },
                ],
            },
            {
                text: "Packages and Modules",
                collapsed: false,
                items: [
                    { text: "Creating and Organizing Packages", link: "/creating" },
                    { text: "Module Management with go mod", link: "/go-mod" },
                    { text: "Dependency Versioning", link: "/versioning" },
                    { text: "Publishing Modules", link: "/publishing" },
                ],
            },
            {
                text: "Testing and Benchmarking",
                collapsed: false,
                items: [
                    { text: "Writing Unit Tests", link: "/unit-tests" },
                    { text: "Table-driven Tests", link: "/table-driven" },
                    { text: "Subtests", link: "/subtests" },
                    { text: "Benchmarking", link: "/benchmarking" },
                    { text: "Example Functions", link: "/examples" },
                    { text: "Mocking and Test Helpers", link: "/mocking" },
                ],
            },
            {
                text: "Standard Library Deep Dive",
                collapsed: false,
                items: [
                    { text: "fmt, strconv, strings, bytes", link: "/fmt-strings" },
                    { text: "File I/O", link: "/file-io" },
                    { text: "JSON Handling", link: "/json" },
                    { text: "HTTP Server and Client", link: "/http" },
                    { text: "Time and Duration", link: "/time" },
                    { text: "Command-line Flags", link: "/flags" },
                ],
            },
            {
                text: "Web Development with Go",
                collapsed: false,
                items: [
                    { text: "Building RESTful APIs", link: "/rest-api" },
                    { text: "Routing", link: "/routing" },
                    { text: "Middleware", link: "/middleware" },
                    { text: "Request/Response Handling", link: "/request-response" },
                    { text: "JSON Serialization", link: "/json" },
                    { text: "Static Files", link: "/static-files" },
                    { text: "CORS and Authentication", link: "/cors-auth" },
                ],
            },
            {
                text: "Working with Databases",
                collapsed: false,
                items: [
                    { text: "database/sql Package", link: "/sql-package" },
                    { text: "Connecting to Databases", link: "/connection" },
                    { text: "Using Drivers", link: "/drivers" },
                    { text: "Prepared Statements and Transactions", link: "/statements" },
                    { text: "ORMs", link: "/orms" },
                ],
            },
            {
                text: "Advanced Topics",
                collapsed: false,
                items: [
                    { text: "Reflection", link: "/reflection" },
                    { text: "Unsafe Operations", link: "/unsafe" },
                    { text: "CGO", link: "/cgo" },
                    { text: "Profiling and Performance Tuning", link: "/pprof" },
                    { text: "Writing CLI Tools", link: "/cli" },
                    { text: "Embedding Files", link: "/embed" },
                ],
            },
            {
                text: "Project Structure and Best Practices",
                collapsed: false,
                items: [
                    { text: "Project Layout", link: "/layout" },
                    { text: "Logging", link: "/logging" },
                    { text: "Configuration", link: "/configuration" },
                    { text: "Dependency Injection", link: "/dependency-injection" },
                    { text: "Code Formatting and Linting", link: "/formatting-linting" },
                    { text: "Documentation", link: "/documentation" },
                ],
            },
            {
                text: "Deployment and DevOps",
                collapsed: false,
                items: [
                    { text: "Building Binaries", link: "/build" },
                    { text: "Cross-compilation", link: "/cross-compilation" },
                    { text: "Dockerizing Go Apps", link: "/docker" },
                    { text: "CI/CD Pipelines", link: "/ci-cd" },
                    { text: "Monitoring and Logging in Production", link: "/monitoring" },
                ],
            },
            {
                text: "Projects",
                collapsed: false,
                items: [
                    { text: "CLI Task Manager", link: "/cli-task-manager" },
                    { text: "REST API Blog or Todo App", link: "/rest-api-project" },
                    { text: "Concurrent Web Scraper", link: "/web-scraper" },
                    { text: "Chat Server using WebSockets", link: "/chat-server" },
                    { text: "Microservice with gRPC", link: "/grpc-microservice" },
                ],
            },
        ],
        socialLinks: [{ icon: "github", link: "https://github.com/prabeshstha11" }],
    },
});
