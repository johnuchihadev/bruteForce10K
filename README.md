# BruteForce10K

A Node.js script that performs a brute-force password search using a password list stored in a text file.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/johnuchihadev/bruteForce10K.git
   ```

2. Navigate to the project directory:

   ```bash
   cd bruteForce10K
   ```

## Usage

To run the brute-force password checker, follow these steps:

1. **Set the Target Password**:
   Open the `bruteForce.js` file and replace the `targetPassword` variable with the password you want to check.

   ```javascript
   const targetPassword = "YourPasswordHere"; // Replace with the password you want to check
   ```

2. **Ensure you have a text file with passwords** (e.g., `passwords.txt`) in the project directory.

3. **Execute the script**:

   ```bash
   node bruteForce.js
   ```

## How It Works

The script utilizes Node.js' `fs` and `readline` modules to read passwords from a file line by line. It compares each password with the target password until a match is found or the file ends.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For inquiries or feedback, feel free to reach out to:

- **Name**: John Uchiha
- **Email**: johnuchiha@proton.me
- **GitHub**: [johnuchihadev](https://github.com/johnuchihadev)
