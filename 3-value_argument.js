// Get the third element of the process.argv array, which is the first argument.
const firstArgument = process.argv[2];

// Check if the first argument is undefined (meaning no argument was passed)
if (firstArgument === undefined) {
  console.log("No argument");
} else {
  // Otherwise, print the first argument.
  console.log(firstArgument);
}
