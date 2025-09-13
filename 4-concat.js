// Get the third element of the process.argv array, which is the first argument.
const firstArgument = process.argv[2];

// Check if the first argument is undefined (meaning no argument was passed)
if (firstArgument === undefined) {
  console.log("No argument");
} else {
  // Otherwise, print the first argument.
  console.log(firstArgument);
}
guillaume@ubuntu:~/0x12$ node 4-concat.js c cool
c is cool
guillaume@ubuntu:~/0x12$ node 4-concat.js c
c is undefined
guillaume@ubuntu:~/0x12$ node 4-concat.js
undefined is undefined
guillaume@ubuntu:~/0x12$ 
