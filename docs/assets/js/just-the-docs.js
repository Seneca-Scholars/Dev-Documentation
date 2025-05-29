document.addEventListener("DOMContentLoaded", function () {
  const expandableItems = document.querySelectorAll(".nav-list-item");

  expandableItems.forEach(item => {
    // Check if this item has a nested <ul class="nav-list">
    const sublist = item.querySelector("ul.nav-list");
    if (sublist) {
      item.setAttribute("data-expanded", "true"); // tells Just the Docs to show it
      const expander = item.querySelector(".nav-list-expander");
      if (expander) {
        expander.setAttribute("aria-pressed", "true");
      }
    }
  });

  console.log("Sidebar sections force-expanded.");
});
