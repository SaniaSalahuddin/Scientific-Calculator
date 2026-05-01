# 🔬 Scientific Calculator

A simple yet powerful **scientific calculator** built using vanilla JavaScript. It supports basic arithmetic operations along with advanced mathematical functions like trigonometry, square roots, and logarithms.

---

## 🚀 Features

* Basic operations: `+`, `-`, `*`, `/`
* Scientific functions:

  * `sin()`, `cos()`, `tan()`
  * `log()`
  * `√` (square root)
* Mathematical constants:

  * `π` (Pi)
  * `e` (Euler's number)
* Clear display and delete last character
* Real-time expression evaluation

---

## 🧠 How It Works

The calculator:

1. Takes user input as a string.
2. Replaces mathematical symbols/functions with JavaScript equivalents:

   * `sin` → `Math.sin`
   * `cos` → `Math.cos`
   * `tan` → `Math.tan`
   * `√` → `Math.sqrt`
   * `log` → `Math.log`
   * `π` → `Math.PI`
   * `e` → `Math.E`
3. Evaluates the expression using `eval()`.

---

## 📂 Project Structure

```
📁 scientific-calculator
│── index.html
│── style.css
│── script.js
```

---

## 📜 Code Overview

```javascript
document.addEventListener('DOMContentLoaded', function() {
    let display = document.getElementById("display");

    window.append = function(value) {
        display.value += value;
    }

    window.clearDisplay = function() {
        display.value = '';
    }

    window.deleteLast = function() {
        display.value = display.value.slice(0, -1);
    }

    window.calculate = function() {
        try {
            let expression = display.value
                .replace(/sin/g, 'Math.sin')
                .replace(/cos/g, 'Math.cos')
                .replace(/tan/g, 'Math.tan')
                .replace(/√/g, 'Math.sqrt')
                .replace(/log/g, 'Math.log')
                .replace(/π/g, 'Math.PI')
                .replace(/e/g, 'Math.E');

            display.value = eval(expression);
        } catch (error) {
            alert('Invalid Expression');
        }
    }
});
```

---

## ⚠️ Note

* This project uses `eval()` to compute expressions. While it works for learning purposes, it is **not recommended for production use** due to security risks.
* Input validation can be improved for better safety.

---

## 🛠️ Future Improvements

* Replace `eval()` with a safer math parser
* Add degree/radian toggle for trigonometric functions
* Improve UI/UX design
* Add keyboard input support
* History of calculations

---

## 📌 Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/your-username/scientific-calculator.git
   ```
2. Open `calculator.html` in your browser.

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

---

## 📄 License

This project is open-source and available under the MIT License.
