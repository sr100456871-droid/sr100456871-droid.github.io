const yearElement = document.getElementById("year");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const copyButtons = document.querySelectorAll(".copy-button");
const copyFeedback = document.getElementById("copy-feedback");

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.getAttribute("data-copy");

    if (!value) {
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      if (copyFeedback) {
        copyFeedback.textContent = `已复制联系方式：${value}`;
      }
    } catch (error) {
      if (copyFeedback) {
        copyFeedback.textContent = `复制失败，请手动记录：${value}`;
      }
    }
  });
});
