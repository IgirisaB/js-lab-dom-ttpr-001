function toggleDarkMode() {
    // This function should toggle the dark mode class on the body
    // comment out the alert below and replace it with your code
    alert("changing modes");
  /*
    TODO: Replace the alert above with code that toggles
    the 'dark' class on <body>.
    
  */
    document.body.classList.toggle("dark");

  // Extra credit: save theme to local storage
  // Save the current theme to Local Storage
  const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
    
}

document
  .getElementById("toggle-btn")
  .addEventListener("click", toggleDarkMode);

  

// a function to set the theme that's saved on page load

function setThemeOnLoad() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
}

// Call setThemeOnLoad when the page loads
setThemeOnLoad();