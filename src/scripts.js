console.log("Script loaded!");

document.addEventListener("DOMContentLoaded", function () {
    const facilities = document.querySelectorAll(".facility");
    const stickyImage = document.getElementById("sticky-image");
    const scrollContent = document.querySelector(".scroll-content");

    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY + window.innerHeight / 2; // Poziția scroll-ului, mai precis

        facilities.forEach((facility, index) => {
            let rect = facility.getBoundingClientRect(); // Obține poziția fiecărei secțiuni
            let middle = window.innerHeight / 2; // Mijlocul ecranului

            if (rect.top < middle && rect.bottom > middle) {
                // Schimbă imaginea doar dacă această secțiune este la mijloc
                stickyImage.src = facility.getAttribute("data-img");

                // Elimină `active` de la toate și adaugă doar la cel vizibil
                facilities.forEach(fac => fac.classList.remove("active"));
                facility.classList.add("active");
            }
        });
    });
});

    // Aplicăm observer-ul pe fiecare secțiune
    facilities.forEach(facility => {
        observer.observe(facility);
    });
;

function changeRoom(image) {
    document.getElementById("roomImg").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("roomImg").src = image;
        document.getElementById("roomImg").style.opacity = "1";
    }, 300);
}
