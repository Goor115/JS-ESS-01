function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
let paragraf = document.querySelectorAll("p");
for (const p of paragraf){
    p.style.border = "1px solid" + getRandomColor();
}