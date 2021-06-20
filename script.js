const item = document.querySelector(`.item`),
      placeholders = document.querySelectorAll(`.placeholder`);

placeholders.forEach((placeholder) => {
    placeholder.addEventListener(`dragover`, dragOver);
    placeholder.addEventListener(`dragenter`, dragEnter);
    placeholder.addEventListener(`dragleave`, dragLeave);
    placeholder.addEventListener(`drop`, drop);
});

function dragOver(e) {
    const target = e.target;
    e.preventDefault();
}

function dragEnter(e) {
    const target = e.target;
    target.classList.add(`hovered`);
}

function dragLeave(e) {
    const target = e.target;
    target.classList.remove(`hovered`);
}

function drop(e) {
    const target = e.target;
    target.append(item);
    target.classList.remove(`hovered`);
}

item.addEventListener(`dragstart`, dragStart);
item.addEventListener(`dragend`, dragEnd);

function dragStart(e) {
    const target = e.target;
    target.classList.add(`hold`);
    setTimeout(() => target.classList.add(`hide`), 0);
}

function dragEnd(e) {
    const target = e.target;
    target.className = `item`;

}