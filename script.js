document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contact form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Pesan terkirim");
    form.reset();
  });
});

document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
