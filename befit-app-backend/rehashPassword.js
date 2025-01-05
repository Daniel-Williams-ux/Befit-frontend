const bcrypt = require('bcryptjs');

const enteredPassword = 'calculus@4242';  // The password you want to hash

async function rehashPassword() {
  try {
    // Hash the entered password with a salt round of 10
    const hashedPassword = await bcrypt.hash(enteredPassword, 10);
    console.log('Rehashed Password:', hashedPassword);
  } catch (error) {
    console.error('Error during rehashing:', error);
  }
}

rehashPassword();