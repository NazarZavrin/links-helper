"use strict"

let linksContainer = document.querySelector(".links-container");


addLink("Інструментальні засоби візуального програмування", "https://meet.google.com/vak-amkg-nyt");
addLink("Дискретна математика", "https://meet.google.com/frv-pwno-nuy");

addLink("Теорія ймовірностей та математична статистика", "https://meet.google.com/jzo-tbdn-iov");
addLink("КПЗ", "https://meet.google.com/hug-seik-dbv");
addLink("Диференційні рівняння (ПН)", "https://meet.google.com/odz-ctqw-fbs");
addLink("Диференційні рівняння (ЧТ)", "https://meet.google.com/gfd-uruo-edq");

addLink("Чисельні методи", "https://meet.google.com/wvv-hpzu-ugu");
addLink("Організація комп'ютерних мереж", "https://meet.google.com/csv-aqog-zsu");
addLink("Фізичне виховання", "https://meet.google.com/mnq-cyvo-opb");




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
    element.classList.add("link-component");
    element.querySelector(".title").textContent = title;
    element.querySelector(".link-text").textContent = link;
    linksContainer.append(element);
}