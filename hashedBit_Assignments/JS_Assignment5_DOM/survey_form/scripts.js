document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("survey-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = {};
    let isValid = true;

    formData.forEach((value, key) => {
      if (!value) {
        isValid = false;
        const input = form.querySelector(`[name=${key}]`);
        input.classList.add("error");
      } else {
        const input = form.querySelector(`[name=${key}]`);
        input.classList.remove("error");
      }
      data[key] = value;
    });

    if (isValid) {
      console.log("Form data submitted:", data);

      const successMessage = document.createElement("div");
      successMessage.className = "success-message";
      successMessage.textContent = "Thank you for submitting the survey!";
      alert("Thank Your taking the survey!");
      form.appendChild(successMessage);

      setTimeout(() => {
        form.removeChild(successMessage);
        form.reset();
      }, 3000);
    } else {
      alert("Please fill out all required fields.");
    }
  });
});
