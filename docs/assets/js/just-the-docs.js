setTimeout(() => {
  const navRoot = document.querySelector(".site-nav .nav-list");
  if (!navRoot) return;

  const topLevelSections = Array.from(navRoot.children).filter(child =>
    child.classList.contains("has-children")
  );

  topLevelSections.forEach(topSection => {
    // Expand all top-level sections
    topSection.classList.add("active");

    // Collapse nested sections
    const nestedSections = topSection.querySelectorAll(".has-children");
    nestedSections.forEach(sub => sub.classList.remove("active"));

    // Keep the current path open
    const activeLink = topSection.querySelector(".nav-list-link[aria-current]");
    if (activeLink) {
      let parent = activeLink.closest(".has-children");
      while (parent) {
        parent.classList.add("active");
        parent = parent.parentElement.closest(".has-children");
      }
    }

    // Allow nested sections to be toggled
    nestedSections.forEach(section => {
      const toggle = section.querySelector(".nav-list-link");
      toggle?.addEventListener("click", e => {
        e.preventDefault();
        section.classList.toggle("active");
      });
    });
  });
}, 100); // delay to ensure DOM is fully built
