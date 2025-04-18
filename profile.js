  const modal = document.getElementById("notepadModal");
  const openModalBtn = document.getElementById("openModalBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");

  openModalBtn.addEventListener("click", function(e) {
    e.preventDefault(); // prevent page jump
    modal.style.display = "block";
  });

  closeModalBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });

  window.addEventListener("click", function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
