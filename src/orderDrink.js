document.addEventListener('DOMContentLoaded', function() {
    /**
     * @param {HTMLElement} element
     * @param {HTMLElement} countElement
     * @param {int} count
     */
    const addClickEvent = function (element, countElement, count) {
        element.addEventListener('click', function () {
            count++;
            countElement.innerText = count + '';
        });
    };

    const drinkIds = [
        'bier',
        'water',
        'spaRood',
        'cola',
        'colaZero',
        'iceTeaRegular',
        'iceTeaGreen',
        'iceTeaLemon',
        'sevenUp',
        'sevenUpFree',
        'fanta',
        'fantaLight'
    ];
    for (let i = 0; i < drinkIds.length; i++) {
        addClickEvent(document.getElementById(drinkIds[i]), document.getElementById(drinkIds[i] + 'Count'), 0);
    }
});
