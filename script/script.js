"use strict"

let linksContainer = document.querySelector(".links-container");

addLink("Бази даних", "https://meet.google.com/wvv-hpzu-ugu");

addLink("Іноземна мова за ПС", "https://us04web.zoom.us/j/72268047838?pwd=SqGzv0fb4rRvJbAi09BjtlWJnwGVvC.1");
addLink("ООП", "https://meet.google.com/vak-amkg-nyt");
addLink("Фізичне виховання", "https://meet.google.com/bqr-qmnm-wpa");

addLink("Математичний аналіз", "https://meet.google.com/ivm-tpoe-get");
addLink("ОПБЖ", "http://meet.google.com/ske-wzjz-aud");
addLink("ОПД", "https://us05web.zoom.us/j/9978212434?pwd=UEtYeHVSUUNqNVhzeFJNcVdrQlkrZz09");

addLink("ОПІ", "https://meet.google.com/oiu-hsru-nor");





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