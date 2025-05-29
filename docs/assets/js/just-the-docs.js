document.addEventListener("DOMContentLoaded", function () {
  const topLevelSections = document.querySelectorAll(".nav-list > .has-children");

  // Expand top-level sections
  topLevelSections.forEach(topSection => {
    topSection.classList.add("active");

    // Collapse any nested children
    const subSections = topSection.querySelectorAll(".has-children");
    subSections.forEach(sub => sub.classList.remove("active"));

    // Keep current active page's branch open
    const activeLink = topSection.querySelector(".nav-list-link[aria-current]");
    if (activeLink) {
      let parent = activeLink.closest(".has-children");
      while (parent) {
        parent.classList.add("active");
        parent = parent.parentElement.closest(".has-children");
      }
    }

    // Add toggle to sub-sections only
    const toggleSections = topSection.querySelectorAll(".has-children");
    toggleSections.forEach(section => {
      const toggle = section.querySelector(".nav-list-link");
      toggle?.addEventListener("click", function (e) {
        e.preventDefault();
        section.classList.toggle("active");
      });
    });
  });
});
