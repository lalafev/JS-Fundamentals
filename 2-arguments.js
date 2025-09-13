// Get the number of arguments passed by the user.
// The `process.argv` array always contains at least two elements:
// 1. The path to the Node.js executable.
// 2. The path to the script being run.
// We subtract 2 to get the count of user-provided arguments.
const numberOfArguments = process.argv.length - 2;

// Check the number of arguments and print the corresponding message.
if (numberOfArguments === 0) {
  console.log("No argument");
} else if (numberOfArguments === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
