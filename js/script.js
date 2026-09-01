/* =========================================
   MOBILE NAVIGATION
   ========================================= */

   const menuToggle = document.querySelector(".menu-toggle");
   const navLinks = document.querySelector(".nav-links");
   
   if (menuToggle && navLinks) {
       menuToggle.addEventListener("click", () => {
           navLinks.classList.toggle("active");
   
           const isOpen = navLinks.classList.contains("active");
   
           menuToggle.setAttribute("aria-expanded", isOpen);
       });
   }
   
   
   /* =========================================
      CLOSE MOBILE MENU WHEN CLICKING A LINK
      ========================================= */
   
   const navigationLinks = document.querySelectorAll(".nav-links a");
   
   navigationLinks.forEach((link) => {
       link.addEventListener("click", () => {
           navLinks.classList.remove("active");
   
           if (menuToggle) {
               menuToggle.setAttribute("aria-expanded", "false");
           }
       });
   });
   
   
   /* =========================================
      SCROLL REVEAL ANIMATION
      ========================================= */
   
   const revealElements = document.querySelectorAll(".reveal");
   
   const revealObserver = new IntersectionObserver(
       (entries, observer) => {
   
           entries.forEach((entry) => {
   
               if (entry.isIntersecting) {
   
                   entry.target.classList.add("active");
   
                   observer.unobserve(entry.target);
               }
   
           });
   
       },
       {
           threshold: 0.15
       }
   );
   
   
   revealElements.forEach((element) => {
       revealObserver.observe(element);
   });
   
   
   /* =========================================
      CURRENT YEAR
      ========================================= */
   
   const yearElement = document.querySelector("#current-year");
   
   if (yearElement) {
       yearElement.textContent = new Date().getFullYear();
   }
   
   
   /* =========================================
      SMOOTH SCROLL
      ========================================= */
   
   const anchors = document.querySelectorAll('a[href^="#"]');
   
   anchors.forEach((anchor) => {
   
       anchor.addEventListener("click", function (event) {
   
           const targetId = this.getAttribute("href");
   
           if (!targetId || targetId === "#") {
               return;
           }
   
           const target = document.querySelector(targetId);
   
           if (!target) {
               return;
           }
   
           event.preventDefault();
   
           target.scrollIntoView({
               behavior: "smooth",
               block: "start"
           });
   
       });
   
   });
   
   
   /* =========================================
      HEADER SHADOW ON SCROLL
      ========================================= */
   
   const header = document.querySelector("header");
   
   window.addEventListener("scroll", () => {
   
       if (!header) {
           return;
       }
   
       if (window.scrollY > 20) {
           header.classList.add("scrolled");
       } else {
           header.classList.remove("scrolled");
       }
   
   });
   
   
   /* =========================================
      ACTIVE NAVIGATION LINK
      ========================================= */
   
   const sections = document.querySelectorAll("section[id]");
   
   window.addEventListener("scroll", () => {
   
       let currentSection = "";
   
       sections.forEach((section) => {
   
           const sectionTop = section.offsetTop - 120;
           const sectionHeight = section.offsetHeight;
   
           if (
               window.scrollY >= sectionTop &&
               window.scrollY < sectionTop + sectionHeight
           ) {
               currentSection = section.getAttribute("id");
           }
   
       });
   
       navigationLinks.forEach((link) => {
   
           link.classList.remove("active");
   
           const href = link.getAttribute("href");
   
           if (href === `#${currentSection}`) {
               link.classList.add("active");
           }
   
       });
   
   });