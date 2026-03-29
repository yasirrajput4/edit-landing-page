document.addEventListener("DOMContentLoaded", function () {
  const pageData = JSON.parse(localStorage.getItem("pageData")) || {
    title: "Welcome!",
    subtitle: "Welcome to our website",
    description:
      "This is a simple landing page where you can edit the title, subtitle, and description. Click the button below to go to the edit page.",
  };

  if (!localStorage.getItem("pageData")) {
    localStorage.setItem("pageData", JSON.stringify(pageData));
  }

  document.getElementById("page-title").textContent = pageData.title;
  document.getElementById("page-subtitle").textContent = pageData.subtitle;
  document.getElementById("page-description").innerHTML =
    `<p>${pageData.description}</p>`;

  const editButton = document.querySelector(".edit-button");
  setInterval(() => {
    editButton.style.animation = "pulse 1.5s";
    setTimeout(() => {
      editButton.style.animation = "";
    }, 1500);
  }, 3000);

  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    const isDarkMode = document.body.classList.contains("dark-theme");
    localStorage.setItem("darkMode", isDarkMode);

    if (isDarkMode) {
      themeToggle.textContent = "Switch to Light Mode";
    } else {
      themeToggle.textContent = "Switch to Dark Mode";
    }
  });

  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-theme");
    themeToggle.textContent = "Switch to Light Mode";
  }
});
