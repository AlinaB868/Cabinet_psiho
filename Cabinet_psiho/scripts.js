(function () {
  document.addEventListener("DOMContentLoaded", function () {
    // Cookie banner
    var banner = document.getElementById("cookie-banner");
    if (!banner) return;
    if (!localStorage.getItem("cookiesAccepted")) banner.style.display = "flex";
    var acceptBtn = document.getElementById("accept-cookies");
    if (acceptBtn)
      acceptBtn.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "1");
        banner.style.display = "none";
      });

    // Simple client-side form handling: basic validation + mailto fallback
    var form = document.querySelector("#programare form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var nume = form.nume.value.trim();
        var email = form.email.value.trim();
        var telefon = form.telefon.value.trim();
        var data = form.data.value;
        var mesaj = form.mesaj ? form.mesaj.value.trim() : "";

        if (!nume || !email || !telefon) {
          alert("Completează Nume, Email și Telefon.");
          return;
        }

        var to = "elena.andrei@deschidemlumea.ro";
        var subject = encodeURIComponent("Cerere programare - " + nume);
        var body = "Nume: " + encodeURIComponent(nume) + "\n";
        body += "Email: " + encodeURIComponent(email) + "\n";
        body += "Telefon: " + encodeURIComponent(telefon) + "\n";
        body += "Data dorita: " + encodeURIComponent(data) + "\n\n";
        body += "Mesaj: " + encodeURIComponent(mesaj) + "\n";

        window.location.href =
          "mailto:" + to + "?subject=" + subject + "&body=" + body;
      });
    }
  });
})();
