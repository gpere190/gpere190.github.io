  const modal = document.getElementById("notepadModal");
  const btn = document.querySelector(".modal-btn");
  const closeBtn = document.querySelector(".close-btn");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
