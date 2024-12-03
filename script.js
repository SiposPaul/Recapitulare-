document.querySelector('#monitorizare-titlu').addEventListener('dblclick', function () {
    const images = [
        "CPU.png",
        "INT.png",
        "MEM.png"
    ];
    const container = document.querySelector('.imagine-container');
    let index = 0;

    container.innerHTML = ""; // Golește containerul

    const showImage = () => {
        container.innerHTML = `<img src="${images[index]}" alt="Slide ${index + 1}" class="slideshow-image">`;
        index = (index + 1) % images.length; // Trecerea la următoarea imagine
    };

    showImage(); // Afișează prima imagine imediat
    const interval = setInterval(showImage, 3000); // Trecerea la următoarea imagine la fiecare 3 secunde

    setTimeout(() => clearInterval(interval), images.length * 3000); // Oprește slideshow-ul după ce toate imaginile au fost afișate o dată
});
