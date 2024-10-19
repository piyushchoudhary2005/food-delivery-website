document.querySelector(".order-now").addEventListener("click", function () {
  alert("Order placed successfully!");
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message!");
  });
