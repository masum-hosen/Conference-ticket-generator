document.getElementById("ticket-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const avatar = document.getElementById("file-upload").files[0];

  // Validate fields
  if (!name || !email || !avatar) {
    alert("Please fill all the fields!");
    return;
  }

  // Validate file size and format
  const maxFileSize = 2 * 1024 * 1024; // 2MB
  if (avatar.size > maxFileSize) {
    alert("File size must be less than 2MB!");
    return;
  }

  if (!["image/jpeg", "image/png", "image/gif"].includes(avatar.type)) {
    alert("Only JPEG, PNG, or GIF formats are allowed!");
    return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address!");
    return;
  }

  // Show ticket
  // const ticketHTML = `

  // `;

  // document.getElementById("container").innerHTML = ticketHTML;

  // render page
  document
    .getElementById("submit-btn")
    .addEventListener("click", renderPage2());
  function renderPage2() {
    document.getElementById("page1").classList.remove("visible");
    document.getElementById("page1").classList.add("hidden");

    document.getElementById("page2").classList.remove("hidden");
    document.getElementById("page2").classList.add("visible");
  }

  // Clear form fields
  document.getElementById("ticket-form").reset();
});
