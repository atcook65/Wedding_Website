document.addEventListener("DOMContentLoaded", function() {
    const events = document.querySelectorAll(".event");

    const showEvents = () => {
        let scrollY = window.scrollY;
        events.forEach(event => {
            let eventOffsetTop = event.offsetTop;
            if (scrollY + window.innerHeight > eventOffsetTop + event.offsetHeight / 2) {
                event.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", showEvents);
    showEvents();
});
