
function sortBoxes() {
    const parentElement = document.querySelector('#box-parent-container');
    const nodeList = document.querySelectorAll('.magic-box');
    const childDivs = Array.prototype.slice.call(nodeList, 0);
    const sortedDivs = childDivs.sort((elementA,elementB) => {
        return elementA.textContent > elementB.textContent ? 1 : -1;
    });

    sortedDivs.forEach((element) => {
        parentElement.appendChild(element);
    });
}

function shuffleBoxes() {
    const parentElement = document.getElementById('box-parent-container');
    const nodeList = document.querySelectorAll('.magic-box');
    const childDivs = Array.from(nodeList);
    while (childDivs.length) {
        const shuffledDiv = Array.prototype.splice.call(childDivs, Math.floor(Math.random() * childDivs.length), 1)[0];
       parentElement.append(shuffledDiv);
    }
}