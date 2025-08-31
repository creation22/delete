const SHEETDB_API = "https://sheetdb.io/api/v1/9s3as0axxyn67";

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// ✅ Popup Modal Function
function showPopup(message) {
  const popup = document.createElement("div");
  popup.className = "popup-overlay";
  popup.innerHTML = `
    <div class="popup-box">
      <h2>Welcome to Sungroupscontractor Team</h2>
      <p>${message}</p>
      <button id="popupClose">OK</button>
    </div>
  `;
  document.body.appendChild(popup);

  document.getElementById("popupClose").addEventListener("click", () => {
    document.body.removeChild(popup);
  });
}

// ✅ Convert FormData to JSON
function formDataToSheetDBJson(formData) {
  const row = {};
  formData.forEach((value, key) => {
    const match = key.match(/data\[(.+)\]/);
    if (match) {
      row[match[1]] = value;
    }
  });
  return { data: [row] };
}

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const submitBtn = contactForm.querySelector("button[type='submit']");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const name = formData.get("data[Name]");
      const email = formData.get("data[Email]");
      const phone = formData.get("data[Phone]");
      

      if (name.length>21 ||name.length<4){
        //len(name)>21 and len(name)<4
        showPopup("Please Enter a valid Name ");
        return ;
      }

      if (!name || !email) {
        showPopup("Please fill in all required fields.");
        return;
      }

      if (!isValidEmail(email)) {
        showPopup("Please enter a valid email address.");
        return;
      }
      if (phone.length!=10){
        showPopup("Please Enter a Valid Phone Number ");
        return;
      }

      const payload = formDataToSheetDBJson(formData);

      // 🔄 Button text change
      submitBtn.textContent = "Submitting...";

      fetch(SHEETDB_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("SheetDB Response:", data);

          // ✅ Success popup
          showPopup("Thank you for your trust, I will connect with you soon.");

          // Reset form
          contactForm.reset();

          // Button status update
          submitBtn.textContent = "Submitted ✅";

          // After 3 sec reset to normal
          setTimeout(() => {
            submitBtn.textContent = "Get Free Quote";
          }, 3000);
        })
        .catch((error) => {
          console.error("Error:", error);
          showPopup("Error submitting form. Please try again.");
          submitBtn.textContent = "Get Free Quote";
        });
    });
  }
});



document.getElementById("whatsappBtn").addEventListener("click", function () {
  const msg = encodeURIComponent("Hello Sungroupscontractor, I want to connect with you");
  window.open(`https://wa.me/919569678499?text=${msg}`, "_blank");
});


    


// Inline hamburger menu logic
        document.addEventListener("DOMContentLoaded", function() {
            var hamburger = document.querySelector('.hamburger');
            var navMenu = document.querySelector('.nav-menu');
            var body = document.body;
            if (hamburger && navMenu) {
                hamburger.addEventListener('click', function(e) {
                    e.stopPropagation();
                    hamburger.classList.toggle('active');
                    navMenu.classList.toggle('active');
                    body.classList.toggle('menu-open');
                });
                document.querySelectorAll('.nav-link').forEach(function(link) {
                    link.addEventListener('click', function() {
                        hamburger.classList.remove('active');
                        navMenu.classList.remove('active');
                        body.classList.remove('menu-open');
                    });
                });
                document.addEventListener('click', function(event) {
                    var isClickInsideNav = navMenu.contains(event.target);
                    var isClickOnHamburger = hamburger.contains(event.target);
                    if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                        hamburger.classList.remove('active');
                        navMenu.classList.remove('active');
                        body.classList.remove('menu-open');
                    }
                });
                document.addEventListener('keydown', function(event) {
                    if (event.key === 'Escape' && navMenu.classList.contains('active')) {
                        hamburger.classList.remove('active');
                        navMenu.classList.remove('active');
                        body.classList.remove('menu-open');
                    }
                });
                document.addEventListener('keydown', function(event) {
                    if (event.key === 'Escape') {
                      hamburger.classList.remove('active');
                      navMenu.classList.remove('active');
                      body.classList.remove('menu-open');
                    }
                  });
                window.addEventListener('scroll', function() {
                    if (navMenu.classList.contains('active')) {
                        hamburger.classList.remove('active');
                        navMenu.classList.remove('active');
                        body.classList.remove('menu-open');
                    }
                });
            }
        });

function toggleService(element) {
  const card = element.closest(".service-card");
  card.classList.toggle("active");
}





    const logo = document.getElementById("logo");
  logo.addEventListener("click", () => {
    logo.classList.add("big");

    // 3 second baad wapas chhota ho jaye
    setTimeout(() => {
      logo.classList.remove("big");
    }, 3000);
});
    