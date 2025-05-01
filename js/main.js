function toggleDarkMode() {
    // This function should toggle the dark mode class on the body
    // comment out the alert below and replace it with your code
    alert("changing modes");
  /*
    TODO: Replace the alert above with code that toggles
    the 'dark' class on <body>.
    
  */
    document.body.classList.toggle("dark");
    
}

document
  .getElementById("toggle-btn")
  .addEventListener("click", toggleDarkMode);