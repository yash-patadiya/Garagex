
var mouse = document.querySelector("#cursor");
var mouse1 = document.querySelector("#cursor-blur");

document.addEventListener('mousemove', function (det) {
    mouse.style.left = det.x + 30 + "px";
    mouse.style.top = det.y - 10 + "px";
})

document.addEventListener('mousemove', function (det) {
    mouse1.style.left = det.x - 50 + "px";
    mouse1.style.top = det.y - 10 + "px";
})
gsap.to("nav", {
    backgroundColor: "black",
    duration: 0.5,
    height: "150px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})