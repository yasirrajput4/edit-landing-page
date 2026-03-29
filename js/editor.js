document.addEventListener("DOMContentLoaded", function () {
  const pageData = JSON.parse(localStorage.getItem("pageData")) || {
    title: "Welcome!",
    subtitle: "Welcome to our website",
    description:
      "This is a simple landing page where you can edit the title, subtitle, and description.",
  };

  document.getElementById("title").value = pageData.title;
  document.getElementById("subtitle").value = pageData.subtitle;
  document.getElementById("description").value = pageData.description;
});

document
  .getElementById("edit-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const updatedData = {
      title: document.getElementById("title").value,
      subtitle: document.getElementById("subtitle").value,
      description: document.getElementById("description").value,
    };

    localStorage.setItem("pageData", JSON.stringify(updatedData));

    const messageElement = document.getElementById("message");
    messageElement.style.display = "block";

    messageElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    setTimeout(function () {
      messageElement.style.display = "none";
    }, 1500);
  });
