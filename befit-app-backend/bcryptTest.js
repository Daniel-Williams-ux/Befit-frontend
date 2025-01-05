const bcrypt = require('bcryptjs');

// const enteredPassword = 'calculus@4242';  // Entered password
// const storedHash = '$2a$10$Sm4HMV.thKfRYP6CwZlK.eJwE63JyKMU/8FWPVwoGt1qqP3mZy4nu'; // Example hash from DB

// async function testPassword() {
//   const isMatch = await bcrypt.compare(enteredPassword, storedHash);
//   console.log('Password Match Result:', isMatch);  // Should print true if passwords match
// }

// const bcrypt = require('bcryptjs');

// const enteredPassword = 'calculus@4242';  // Entered password

// async function testPassword() {
//   try {
//     // Hash the entered password
//     const hashedPassword = await bcrypt.hash(enteredPassword, 10);
//     console.log('Hashed Password:', hashedPassword);

//     // Compare the entered password with the hash
//     const isMatch = await bcrypt.compare(enteredPassword, hashedPassword);
//     console.log('Password Match Result:', isMatch);  // Should print true if passwords match
//   } catch (error) {
//     console.error('Error during hashing/comparison:', error);
//   }
// }

//testPassword();


// Entered password
// const enteredPassword = 'calculus@4242';

// // Fetch the stored hash from the database (ensure no invisible characters)
// const storedHash = '$2a$10$2Chnp.QBX58nzafjYOa8/ObtdRt2gU/wLmq2cQ/WzVYRJxKv3hfi2'.trim(); // Example hash from DB

// async function testPassword() {
//   try {
//     // Compare entered password with stored hash
//     const isMatch = await bcrypt.compare(enteredPassword, storedHash);
//     console.log('Password Match Result:', isMatch);  // Should print true if passwords match
//   } catch (error) {
//     console.error('Error during comparison:', error);
//   }
// }

// testPassword();


const enteredPassword = 'calculus@4242';  // The entered password
const storedHash = '$2a$10$WfuvbDqhetrE6SS9.rZU7OAf96gXQVOSAQngtJOlQZWBuK/dZYF2a'; // The newly generated hash from your database

async function testPassword() {
  try {
    // Compare the entered password with the stored hash
    const isMatch = await bcrypt.compare(enteredPassword, storedHash);
    console.log('Password Match Result:', isMatch);  // Should print true if passwords match
  } catch (error) {
    console.error('Error during comparison:', error);
  }
}

testPassword();