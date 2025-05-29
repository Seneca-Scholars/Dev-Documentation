document.addEventListener("DOMContentLoaded", function () {
  // Expand all sections in the sidebar
  document.querySelectorAll(".has-children").forEach(section => {
    section.classList.add("active");
  });

  console.log("All sidebar sections expanded.");
});
