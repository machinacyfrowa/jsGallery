function moveRollRight() {
    // Move the roll to the right
    // element rolki z miniaturami
    const element = document.getElementById('thumbnailRoll');
    //odczytaj obecną wartość atrybutu right dla rolki
    const offset = window.getComputedStyle(element).right;
    //usuń jednostkę i wyrówna do liczby całkowitej
    newOffset = parseInt(offset);
    newOffset += 400;
    newOffset += "px";
    element.style.right = newOffset;
}
function moveRollLeft() {
    // Move the roll to the left
    // element rolki z miniaturami
    const element = document.getElementById('thumbnailRoll');
    //odczytaj obecną wartość atrybutu right dla rolki
    const offset = window.getComputedStyle(element).right;
    //usuń jednostkę i wyrówna do liczby całkowitej
    newOffset = parseInt(offset);
    newOffset -= 400;
    newOffset += "px";
    element.style.right = newOffset;
}

//zdarzenie kliknięcia strzałki od miniaturek w prawo
document.getElementById('rightArrowSmall').addEventListener('click', moveRollRight);
document.getElementById('leftArrowSmall').addEventListener('click', moveRollLeft);