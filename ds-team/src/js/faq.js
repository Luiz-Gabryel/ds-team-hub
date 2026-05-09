export function initFaq() {
  const items = document.querySelectorAll(".faq-item");

  items.forEach((item) => {
    const button = item.querySelector(".faq-title");

    button.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
}