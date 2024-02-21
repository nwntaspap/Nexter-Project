///////////////////////////////////////////////////////////
// Make navigation work

const btnNavEl = document.querySelector(".nav-btn");
const sidebarEl = document.querySelector(".sidebar");

btnNavEl.addEventListener("click", function () {
  sidebarEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scroll animation

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) =>
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("side-nav__link")) {
      sidebarEl.classList.toggle("nav-open");
    }
  })
);
