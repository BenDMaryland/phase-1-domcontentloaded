// Your code goes heredocument.addEventListener("DOMContentLoaded", function() {
    
const text = document.querySelector("#text")
console.log(text)


document.addEventListener("DOMContentLoaded", function() {
        console.log("The DOM has loaded");
        text.textContent = "This is really cool!"
      });
      
      console.log(
        "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
      );