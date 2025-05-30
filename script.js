document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contact form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Pesan terkirim");
    form.reset();
  });
});

document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").replace("#", "");
    const section = document.getElementById(targetId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});

document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").replace("#", "");
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contact form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Pesan terkirim");
    form.reset();
  });
});

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});