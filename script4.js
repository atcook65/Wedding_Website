document.addEventListener("DOMContentLoaded", function() {
    const events = document.querySelectorAll(".event");

    const showEvents = () => {
        let scrollY = window.scrollY;
        events.forEach((event, index) => {
            let eventOffsetTop = event.offsetTop;
            if (scrollY + window.innerHeight > eventOffsetTop + event.offsetHeight / 2) {
                setTimeout(() => {
                    event.classList.add("visible");
                }, index * 200); // Delay each event's appearance
            }
        });
    };

    window.addEventListener("scroll", showEvents);
    showEvents();
});
