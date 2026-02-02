document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-scroll-to]");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const selector = button.getAttribute("data-scroll-to");
      const target = document.querySelector(selector);

      if (!target) return;

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
});
