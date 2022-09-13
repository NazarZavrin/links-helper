"use strict"

let linksContainer = document.querySelector(".links-container");

addLink("Архітектура комп'ютера (mooodle)", "http://moodle.krkm.dnu.edu.ua/course/view.php?id=59");
addLink("Алгоритми і структури даних", "https://meet.google.com/fvg-fjwm-fxi");
addLink("Фізичне виховання", "https://meet.google.com/bqr-qmnm-wpa");

addLink("Українська мова за ПС", "https://meet.google.com/nqj-vymy-pru");
addLink("Держава і ринок", "https://meet.google.com/vvr-yexu-qmh");




linksContainer.addEventListener("click", event => {
    if (event.target.textContent === "Copy"){
        let container = event.target.closest(".link-container");
        let link = container.querySelector(".link-text").textContent;
        navigator.clipboard.writeText(link);
    } else if(event.target.matches(".link-text")){
        let linkElement = document.createElement("a");
        linkElement.href = event.target.textContent;
        linkElement.setAttribute("target", "_blank");
        linkElement.click();
    }
})

function addLink(title, link) {
    let element = document.querySelector(".structure").cloneNode(true);
    element.classList.remove("structure");
    element.classList.add("link-container");
    element.querySelector(".title").textContent = title;
    element.querySelector(".link-text").textContent = link;
    linksContainer.append(element);
}