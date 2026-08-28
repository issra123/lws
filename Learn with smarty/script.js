/* ==========================================
   LEARN WITH SMARTY
   WEBSITE JAVASCRIPT
========================================== */





const smartyWhatsAppNumber = "96181941723";




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
                navLinks.classList.contains(
                    "mobile-open"
                );


            if (menuIsOpen) {

                closeMobileMenu();

            }

            else {

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

                if (
                    window.innerWidth < 860
                ) {

                    closeMobileMenu();

                }

            }
        );


    });

}


/*
OPEN MOBILE MENU
*/


function openMobileMenu() {


    navLinks.classList.add(
        "mobile-open"
    );


    navLinks.style.display =
        "flex";


    navLinks.style.flexDirection =
        "column";


    navLinks.style.position =
        "absolute";


    navLinks.style.top =
        "79px";


    navLinks.style.left =
        "0";


    navLinks.style.right =
        "0";


    navLinks.style.background =
        "#FFFFFF";


    navLinks.style.padding =
        "20px 24px";


    navLinks.style.borderBottom =
        "1px solid #DCE3FA";


    navLinks.style.boxShadow =
        "0 8px 24px rgba(16,27,77,.08)";


    navLinks.style.gap =
        "16px";

}


/*
CLOSE MOBILE MENU
*/


function closeMobileMenu() {


    navLinks.classList.remove(
        "mobile-open"
    );


    navLinks.removeAttribute(
        "style"
    );

}



/* ==========================================
   HANDLE SCREEN RESIZE

   This prevents the navigation from
   disappearing after moving between
   mobile and desktop sizes.
========================================== */


window.addEventListener(
    "resize",
    function () {


        if (
            window.innerWidth >= 860
        ) {

            navLinks.classList.remove(
                "mobile-open"
            );


            navLinks.removeAttribute(
                "style"
            );

        }


    }
);



/* ==========================================
   FLOATING WHATSAPP BUTTON
========================================== */


const whatsappButton =
    document.getElementById(
        "whatsappButton"
    );


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
   CONTACT FORM

   The form sends the information through
   WhatsApp.

   No backend or Formspree needed yet.
========================================== */


const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {


    contactForm.addEventListener(
        "submit",
        function (event) {


            event.preventDefault();



            const parentName =

                document.getElementById(
                    "parentName"
                ).value;



            const childName =

                document.getElementById(
                    "childName"
                ).value;



            const email ="smartycoders.team@gmail.com"

                document.getElementById(
                    "email"
                ).value;



            const phone =

                document.getElementById(
                    "phone"
                ).value;



            const subjectInterest =

                document.getElementById(
                    "subjectInterest"
                ).value;



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

                "Phone: " +
                phone +
                "\n" +

                "Interested in: " +
                subjectInterest;



            const whatsappURL =

                "https://wa.me/" +

                smartyWhatsAppNumber +

                "?text=" +

                encodeURIComponent(
                    message
                );



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
    document.getElementById(
        "calendarButton"
    );


if (calendarButton) {


    calendarButton.addEventListener(
        "click",
        function (event) {


            /*
            CALENDAR NOT SET YET
            */


            if (
                smartyCalendarLink === "#"
            ) {


                event.preventDefault();


                alert(

                    "Online demo scheduling is coming soon. Please contact us on WhatsApp to arrange your demo."

                );


                return;

            }



            /*
            CALENDAR READY
            */


            event.preventDefault();


            window.open(
                smartyCalendarLink,
                "_blank"
            );


        }
    );

}
