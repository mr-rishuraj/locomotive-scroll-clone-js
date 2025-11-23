window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    const left = document.querySelector(".left h1");
    const right = document.querySelector(".right h1");

    const leftRect = left.getBoundingClientRect();
    const rightRect = right.getBoundingClientRect();

    const leftVisible = leftRect.top < window.innerHeight && leftRect.bottom > 0;
    const rightVisible = rightRect.top < window.innerHeight && rightRect.bottom > 0;

    if (leftVisible) {
        left.style.transform = `translateX(${scrollY}px)`;
    }

    if (rightVisible) {
        right.style.transform = `translateX(-${scrollY}px)`;
    }

    // Upward text movement
    document.querySelector(".v").style.transform = `translateY(-${scrollY * 0.15}px)`;
    document.querySelector(".four").style.transform = `translateY(-${scrollY * 0.25}px)`;
    document.querySelector(".x").style.transform = `translateY(-${scrollY * 0.2}px)`;
    document.querySelector(".locomotive").style.transform = `translateY(-${scrollY * 0.15}px)`;

});

