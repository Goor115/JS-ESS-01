function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let colorSampleDiv = document.querySelector("#color-sample");
let colorPalitra = document.querySelector("#palitra");
let colorValue = getRandomColor();

colorSampleDiv.style.backgroundColor = colorValue;
colorPalitra.textContent = colorValue;