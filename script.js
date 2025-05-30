document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contact form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Pesan terkirim");
    form.reset();
  });
});
