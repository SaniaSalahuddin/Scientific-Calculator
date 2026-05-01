document.addEventListener('DOMContentLoaded', function() {
    let display = document.getElementById("display");

    // Add to display
    window.append = function(value) {
        display.value += value;
    }

    // Clear display
    window.clearDisplay = function() {
        display.value = '';
    }

    // Delete last character
    window.deleteLast = function() {
        display.value = display.value.slice(0, -1);
    }

    // Calculate result
    window.calculate = function() {
        try {
            // Replace custom functions with actual JavaScript functions
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
