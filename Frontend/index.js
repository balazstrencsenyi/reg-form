document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("#name").value;
    const email = form.querySelector("#email").value;
    const confirmEmail = form.querySelector("#confirm-email").value;
    const source = form.querySelector("#source").value;
    const agreement = form.querySelector("#agreement").checked;

    if (!name || !email || !confirmEmail || !source || !agreement) {
      message.innerHTML =
        "Minden mezőt ki kell tölteni és az adatkezelési nyilatkozatot elfogadni!";
    } else if (email !== confirmEmail) {
      message.innerHTML = "Az email címek nem egyeznek!";
    } else {
      message.innerHTML = "Sikeres regisztráció!";
      form.reset();
    }
  });
});
