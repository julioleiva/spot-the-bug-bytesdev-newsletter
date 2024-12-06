# Spot the Bug - BytesDev Newsletter Challenges

Welcome to **Spot the Bug**, a learning project inspired by the insightful challenges shared in the weekly **Bytes.dev** newsletter! This repository is designed for developers looking to deepen their understanding of **JavaScript** by solving real-world problems, debugging, and exploring the nuances of the language.

---

## 📖 About the Project

This project is a hands-on learning tool aimed at improving your JavaScript skills through carefully crafted challenges. Each challenge is organized into folders with:

- A **bug** version containing the problem as it appears.
- A **solution** version containing the resolved code, along with thorough documentation.
- **Unit tests** for verifying understanding and correctness.
- **Background information** on the JavaScript concepts at play.

This repository intentionally avoids any external dependencies to maintain a **focus on native JavaScript**.

---

## 📂 Directory Structure

The repository is structured as follows:

```
/<Challenge Name>
   /bug
      index.html       - Minimal HTML to render the JavaScript code
      script.js        - JavaScript code containing the bug
   /solution
      index.html       - Fixed version of the HTML
      script.js        - Corrected JavaScript code
      README.md        - Documentation explaining the issue, solution, and related JS concepts
/tests
   <challenge_name>.test.js - Unit tests for the challenge
```

### Current Challenges

1. **Limitations of Arrow Functions**  
   Explore the nuances of arrow functions and their differences from traditional functions, such as the `this` binding.

2. **Use of `new` in Constructors**  
   Understand how the `new` keyword impacts object creation and why omitting it can cause issues.

3. **Queue Algorithm**  
   Dive into creating and managing queues efficiently in JavaScript.

4. **Default Parameters**  
   Learn how JavaScript handles default parameters and how incorrect usage can lead to bugs.

---

## 🧪 Unit Testing

Unit tests are provided for each challenge to ensure the solutions are robust and cover all edge cases. Tests are written using **native JavaScript testing techniques**, with no additional libraries, to reinforce core JS knowledge.

### Running the Tests

To run the tests:

1. Clone the repository:  
   ```bash
   git clone <repo-url>
   cd <repo-directory>
   ```

2. Open the test files in your browser or Node.js console and verify the outputs.

---

## 📜 Documentation

Each challenge includes a detailed `README.md` within the `solution` folder. These documents provide:

- **Background**: An explanation of the problem and its real-world relevance.
- **Solution Walkthrough**: A step-by-step guide to understanding and fixing the bug.
- **Key JavaScript Concepts**: Insights into the language features at play.
- **References**: Links to MDN and other reliable sources for further reading.

---

## 🎯 Goals

- Build a **deeper understanding** of JavaScript fundamentals.
- Develop **problem-solving and debugging** skills.
- Learn to **write and run unit tests** for native JS.
- Maintain focus on **pure JavaScript** without dependencies.

---

## ❤️ Inspired By

This project was born out of admiration for the **Bytes.dev** newsletter. Their weekly challenges are an amazing way to learn JavaScript through fun, thought-provoking examples. If you enjoy this repository, consider subscribing to their newsletter to stay updated with more challenges and learning opportunities.

---

## 🌟 Contributions

Contributions are welcome! Feel free to submit additional challenges, report issues, or suggest improvements.

---

## 📬 Contact

For questions, feedback, or collaboration, feel free to reach out via [GitHub Issues](https://github.com/julioleiva/spot-the-bug-bytesdev-newsletter/issues).

---

Enjoy debugging and happy coding! 🚀
