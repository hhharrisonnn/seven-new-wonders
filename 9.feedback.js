const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const mailFormat = /(?:[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\[\x01-\x09\x0b\x0c\x0e-\x7f])")@(?:(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-][a-z0-9])?|[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])/

form.addEventListener("submit", (e) => {
  let messages = []
  if (firstName.value === "" || firstName.value == null) {
    messages.push("First name is required");
  }

  if (lastName.value === "" || lastName.value == null) {
    messages.push("Last name is required");
  }

  if (email.match(mailFormat)) {

  } else {
    messages.push("The email is not valid.");
  }

  if (message.length <= 10) {
    messages.push("Message must be longer than 10 characters.");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(",");
  }
})
