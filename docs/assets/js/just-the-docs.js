document.addEventListener("DOMContentLoaded", function () {
  // Simple interaction test
  const title = document.querySelector("h1");
  if (title) {
    title.textContent += " 👋 Script loaded!";
    title.style.color = "orange";
  }

  console.log("Custom Just the Docs JS is running.");
});
