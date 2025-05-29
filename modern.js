document.addEventListener("DOMContentLoaded", () => {
  // Анімація fade-in
  const elements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));

  // Модальне вікно
  const modal = document.getElementById("registerModal");
  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = document.querySelector(".close-btn");

  if (openBtn && modal && closeBtn) {
    openBtn.onclick = () => modal.style.display = "flex";
    closeBtn.onclick = () => modal.style.display = "none";

    // Закриття по кліку поза модальним вікном
    window.onclick = (e) => {
      if (e.target === modal) modal.style.display = "none";
    };
  }

  // Показати/сховати пароль
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("passwordInput");

  if (togglePassword && passwordInput) {
    togglePassword.addEventListener("click", () => {
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
    });
  }

  // Обробка кнопки "Зареєструватись"
  const registerBtn = document.getElementById("registerBtn");
  if (registerBtn) {
    registerBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const name = document.getElementById("registerName")?.value;
      const email = document.getElementById("registerEmail")?.value;
      const pass = passwordInput?.value;

      if (!name || !email || !pass) {
        alert("Будь ласка, заповніть всі поля!");
        return;
      }

      alert(`Реєстрація успішна!\nІм'я: ${name}\nEmail: ${email}`);
      if (modal) modal.style.display = "none";

      
    });
  }



    // Встановити початкову тему
    document.body.classList.add("light-theme");
  }
);


      // Закрити вікно після реєстрації
      if (modal) modal.style.display = "none";
    
