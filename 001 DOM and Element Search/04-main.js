let list = document.querySelectorAll("li:first-child, li:last-child");
for (const li of list){
    li.style.border = "1px solid red";
}