(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!finePointer) return;

    const dot = document.createElement("div");
    dot.className = "cursor-dot";

    const ring = document.createElement("div");
    ring.className = "cursor-ring";

    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const updateMouse = (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
        dot.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`;
    };

    window.addEventListener("mousemove", updateMouse);

    const animate = () => {
        ringX += (mouseX - ringX) * 0.16;
        ringY += (mouseY - ringY) * 0.16;
        ring.style.transform = `translate(${ringX - 17}px, ${ringY - 17}px)`;
        requestAnimationFrame(animate);
    };

    animate();

    const hoverTargets = document.querySelectorAll("a, button, input, textarea, select, label");
    hoverTargets.forEach((element) => {
        element.addEventListener("mouseenter", () => ring.classList.add("cursor-hover"));
        element.addEventListener("mouseleave", () => ring.classList.remove("cursor-hover"));
    });
})();
