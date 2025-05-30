const styleBoxes = () => {
    console.log('Starting styleBoxes function');
    
    Array(4).fill(0).forEach((_, i) => {
        const box = document.getElementById(`box${i + 1}`);
        const area = document.getElementById(`area${i + 1}`);
        
        console.log(`Processing box${i + 1}:`, box);
        console.log(`Processing area${i + 1}:`, area);
        
        if (!box || !area) {
            console.error(`Missing element: box${i + 1} or area${i + 1}`);
            return;
        }
        
        if (!area.coords) {
            console.error(`Missing coords for area${i + 1}`);
            return;
        }

        const coords = area.coords.split(",");
        console.log(`Coords for area${i + 1}:`, coords);

        box.style.width = (Math.abs(coords[0] - coords[2])) + "px"
        box.style.height = (Math.abs(coords[1] - coords[3])) + "px"
        box.style.left = Number(coords[0]) + "px"
        box.style.top = Number(coords[1]) + "px"
    });
}

setInterval(() => {
    if (window.innerWidth > 400) {
        console.log('Window width > 400, initializing rwdImageMaps');
        if (typeof $ === 'undefined') {
            console.error('jQuery is not loaded!');
            return;
        }
        if (typeof $.fn.rwdImageMaps !== 'function') {
            console.error('rwdImageMaps plugin is not loaded!');
            return;
        }
        
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
        console.log('Window resized > 400, reinitializing rwdImageMaps');
        if (typeof $ === 'undefined') {
            console.error('jQuery is not loaded!');
            return;
        }
        if (typeof $.fn.rwdImageMaps !== 'function') {
            console.error('rwdImageMaps plugin is not loaded!');
            return;
        }
        
        $(document).ready(function (e) {
            $("img[usemap]").rwdImageMaps();
        });
        setTimeout(() => {
            styleBoxes();
        }, 2000)
    }
});

