function getImageUrls() {
    const element = document.getElementById('thumbnailRoll');
    const images = element.getElementsByTagName('img');
    const urls = [];

    for (let i = 0; i < images.length; i++) {
        //pobiera pełną ścieżkę do pliku
        const url = images[i].src;
        //dzieli ścieżkę na każdym znaku / i bierze tyko ostatni element
        //(nazwę pliku)
        const path = url.split('/').pop();
        urls.push(path);
    }

    return urls;
}
function setFirstPicture() {
    const element = document.querySelector("#bigThumbnail img");
    const images = getImageUrls();
    element.src = "img/" + images[0];
}
function nextPicture() {
    //lista wszystkich zdjec
    const urlList = getImageUrls();
    //pobierz url obecnego zdjecia
    const currentUrl = document.querySelector("#bigThumbnail img").src;
    //znajdz indeks zdjecia w liscie
    let currentIndex = urlList.indexOf(currentUrl.split("/").pop());
    if(currentIndex == urlList.length - 1) {
        //obecne zdjecie jest ostatnim na liscie - wróć na początek listy
        currentIndex = -1;
    } 
    //znajdz następne zdjęcie na liscie
    let nextPictureUrl = "img/" + urlList[currentIndex+1];
    //podmien url zdjecia
    document.querySelector("#bigThumbnail img").src = nextPictureUrl;
}
function prevPicture() {
    //lista wszystkich zdjec
    const urlList = getImageUrls();
    //pobierz url obecnego zdjecia
    const currentUrl = document.querySelector("#bigThumbnail img").src;
    //znajdz indeks zdjecia w liscie
    let currentIndex = urlList.indexOf(currentUrl.split("/").pop());
    if(currentIndex == 0) {
        //obecne zdjecie jest pierwszym na liście - wróć na koniec
        currentIndex = urlList.length;
    } 
    //znajdz następne zdjęcie na liscie
    let nextPictureUrl = "img/" + urlList[currentIndex-1];
    //podmien url zdjecia
    document.querySelector("#bigThumbnail img").src = nextPictureUrl;
}

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

document.getElementById('rightArrow').addEventListener('click', nextPicture);
document.getElementById('leftArrow').addEventListener('click', prevPicture);

window.addEventListener('load', setFirstPicture);