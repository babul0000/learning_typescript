"use strict";
const inputField = document.getElementById("username");
// console.log(inputField.value);
const button = document.getElementById("btn");
button.addEventListener("click", () => {
    console.log(inputField.value);
    const value = inputField.value;
    if (value.trim() === "") {
        alert("please enter your name");
    }
    else {
        console.log(value);
    }
});
//# sourceMappingURL=inputFile.js.map