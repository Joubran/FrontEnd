function changeGreeting() {
   const greetingElement = document.getElementById('greeting');
   if (greetingElement.innerText === "Hello, World") {
   greetingElement.innerText = "Hello, FEFU";
} else {
    greetingElement.innerText = "Hello, World";
}
}