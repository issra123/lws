/* ==========================================
   LEARN WITH SMARTY
   WEBSITE JAVASCRIPT
========================================== */


/* ==========================================
   SETTINGS
========================================== */


/*
YOUR WHATSAPP NUMBER

Example:
+961 70 123 456

becomes:

96170123456

NO +
NO spaces
*/

const smartyWhatsAppNumber = "961XXXXXXXX";


/*
YOUR GOOGLE CALENDAR BOOKING LINK

When ready, paste your real Google Calendar
appointment link here.

For now leave "#".
*/

const smartyCalendarLink = "#";



/* ==========================================
   LEARNING PATH ANIMATION
========================================== */

window.addEventListener("load", function () {

    const pathFill =
        document.getElementById("pathFill");

    if (pathFill) {

        pathFill.style.width = "100%";

    }

});



/* ==========================================
   MOBILE NAVIGATION
========================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


if (menuBtn && navLinks) {

    menuBtn.addEventListener(
        "click",
        function () {

            const menuIsOpen =
                navLinks.classList.contains("mobile-open");

            if (menuIsOpen) {

                closeMobileMenu();

            } else {

                openMobileMenu();

            }

        }
    );


    const links =
        navLinks.querySelectorAll("a");


    links.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                if (window.innerWidth < 860) {

                    closeMobileMenu();

                }

            }
        );

    });

}



/* ==========================================
   OPEN MOBILE MENU
========================================== */

function openMobileMenu() {

    navLinks.classList.add("mobile-open");

    navLinks.style.display = "flex";

    navLinks.style.flexDirection = "column";

    navLinks.style.position = "absolute";

    navLinks.style.top = "79px";

    navLinks.style.left = "0";

    navLinks.style.right = "0";

    navLinks.style.background = "#FFFFFF";

    navLinks.style.padding = "20px 24px";

    navLinks.style.borderBottom =
        "1px solid #DCE3FA";

    navLinks.style.boxShadow =
        "0 8px 24px rgba(16,27,77,.08)";

    navLinks.style.gap = "16px";

}



/* ==========================================
   CLOSE MOBILE MENU
========================================== */

function closeMobileMenu() {

    navLinks.classList.remove("mobile-open");

    navLinks.removeAttribute("style");

}



/* ==========================================
   HANDLE SCREEN RESIZE
========================================== */

window.addEventListener(
    "resize",
    function () {

        if (
            window.innerWidth >= 860 &&
            navLinks
        ) {

            navLinks.classList.remove("mobile-open");

            navLinks.removeAttribute("style");

        }

    }
);



/* ==========================================
   FLOATING WHATSAPP BUTTON
========================================== */

const whatsappButton =
    document.getElementById("whatsappButton");


if (whatsappButton) {

    const message =
        "Hi! I'd like to know more about Learn with Smarty.";

    whatsappButton.href =
        "https://wa.me/" +
        smartyWhatsAppNumber +
        "?text=" +
        encodeURIComponent(message);

}



/* ==========================================
   CONTACT FORM -> WHATSAPP
========================================== */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const parentName =
                document.getElementById("parentName").value.trim();


            const childName =
                document.getElementById("childName").value.trim();


            const email =
                document.getElementById("email").value.trim();


            const phone =
                document.getElementById("phone").value.trim();


            const subjectInterest =
                document.getElementById("subjectInterest").value;


            const message =

                "Hi Learn with Smarty! 👋\n\n" +

                "I would like to request a free demo.\n\n" +

                "Parent / Contact: " +
                parentName +
                "\n" +

                "Learner: " +
                childName +
                "\n" +

                "Email: " +
                email +
                "\n" +

                "Phone / WhatsApp: " +
                phone +
                "\n" +

                "Interested in: " +
                subjectInterest;


            const whatsappURL =

                "https://wa.me/" +
                smartyWhatsAppNumber +
                "?text=" +
                encodeURIComponent(message);


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}



/* ==========================================
   CALENDAR BUTTON
========================================== */

const calendarButton =
    document.getElementById("calendarButton");


if (calendarButton) {

    calendarButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            if (
                !smartyCalendarLink ||
                smartyCalendarLink === "#"
            ) {

                alert(
                    "Online demo scheduling is coming soon. Please contact us on WhatsApp to arrange your demo."
                );

                return;

            }


            window.open(
                smartyCalendarLink,
                "_blank",
                "noopener"
            );

        }
    );

}



/* ==========================================
   MOBILE PROGRAMS - SHOW MORE / SHOW LESS
========================================== */

const programsToggle =
    document.getElementById("programsToggle");

const programsGrid =
    document.querySelector(".prog-grid");


if (programsToggle && programsGrid) {

    programsToggle.addEventListener(
        "click",
        function () {

            programsGrid.classList.toggle("show-all");


            const isOpen =
                programsGrid.classList.contains("show-all");


            if (isOpen) {

                programsToggle.textContent =
                    "Show Fewer Programs ↑";

            } else {

                programsToggle.textContent =
                    "Show More Programs ↓";

            }

        }
    );

}



/* ==========================================
   RESET PROGRAMS WHEN RETURNING TO DESKTOP
========================================== */

window.addEventListener(
    "resize",
    function () {

        if (
            window.innerWidth > 640 &&
            programsGrid
        ) {

            programsGrid.classList.remove("show-all");


            if (programsToggle) {

                programsToggle.textContent =
                    "Show More Programs ↓";

            }

        }

    }
);



/* ==========================================
   FAQ

   Keep only one FAQ open at a time.
========================================== */

const faqItems =
    document.querySelectorAll(".faq-item");


faqItems.forEach(function (item) {

    item.addEventListener(
        "toggle",
        function () {

            if (!item.open) {
                return;
            }


            faqItems.forEach(
                function (otherItem) {

                    if (otherItem !== item) {

                        otherItem.removeAttribute("open");

                    }

                }
            );

        }
    );

});
