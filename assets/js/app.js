
const styleBoxes = () => {

    Array(4).fill(0).forEach((_, i) => {
        const box = document.getElementById(`box${i + 1}`);

        const area = document.getElementById(`area${i + 1}`);

        const coords = area.coords.split(",");

        box.style.width = (Math.abs(coords[0] - coords[2])) + "px"
        box.style.height = (Math.abs(coords[1] - coords[3])) + "px"
        box.style.left = Number(coords[0]) + "px"
        box.style.top = Number(coords[1]) + "px"
    });

}

setInterval(() => {
    if (window.innerWidth > 400) {
        $(document).ready(function (e) {
            $("img[usemap]").rwdImageMaps();
        });
        setTimeout(() => {
            styleBoxes();
        }, 2000)
    }
}, 1000)



window.addEventListener("resize", () => {
    if (window.innerWidth > 400) {
        $(document).ready(function (e) {
            $("img[usemap]").rwdImageMaps();
        });
        setTimeout(() => {
            styleBoxes();
        }, 2000)
    }
});

