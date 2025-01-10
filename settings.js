/**
 * Mengubah bentuk icon saat dihover
 */
const icons = document.querySelectorAll(".sosmed i");

icons?.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.classList.remove("ph");
    icon.classList.add("ph-fill");
  });

  icon.addEventListener("mouseleave", () => {
    icon.classList.remove("ph-fill");
    icon.classList.add("ph");
  });
});

/**
 * Saat klik icon copy
 */
const linkActions = document.querySelectorAll(".link-card .link-action");

linkActions.forEach((action) => {
  const url = action.parentElement.getAttribute("href");
  const toastElement = `<div class="toast">
                          <p>
                              ✅ Link berhasil disalin!
                          </p>
                        </div>`;

  action.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(url);
    document.querySelector(".toast-container").innerHTML = toastElement;
    const toastChild = document.querySelector(".toast-container .toast");
    setTimeout(() => {
      toastChild.classList.add("toast-gone");
    }, 300);
    setTimeout(() => {
      toastChild.remove();
    }, 3000);
  });
});

document.addEventListener("scroll", (e) => {
  document.querySelector(".bg-text").style.transform = `translateX(${
    window.scrollY / 2
  }px)`;
});
