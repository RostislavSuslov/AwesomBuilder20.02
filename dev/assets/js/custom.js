const buildItem = document.querySelectorAll('.build-item')

const cellAdress = document.querySelector('#address')
const cellFlats = document.querySelector('#flats')
const cellFlatsFree = document.querySelector('#flats-free')
const cellFlatsBooking = document.querySelector('#flats-booking')
const cellFlatsSold = document.querySelector('#flats-sold')



const showInformation = (cell, attr) => buildItem.forEach(object => {
    object.addEventListener('mouseover', () => {
        const value = object.getAttribute(attr)
        cell.innerText = value
    })
})

showInformation(cellAdress, 'data-address')
showInformation(cellFlats, 'data-flats')
showInformation(cellFlatsFree, 'data-flats-free')
showInformation(cellFlatsBooking, 'data-flats-booking')
showInformation(cellFlatsSold, 'data-flats-sold')


// const showNamber = (a, b, c, d)=> {
//     console.log('Число: ', a, a, a, a, a, a, a, b, c, d, );
// }
// showNamber( '96', 'arg-b', 'arg-c', 'arg-d Незалежності 15',)
// const soldFlats = document.querySelectorAll('[data-flats-free="0"]')
// soldFlats.forEach(item => item.classList.add('sold'))

const calcInformation = () => buildItem.forEach(item => {
    let flats = Number(item.getAttribute('data-flats'));
    let flatsBooking = Number(item.getAttribute('data-flats-booking'))
    let flatsSold = Number(item.getAttribute('data-flats-sold'))

    let flatsFree = flats - (flatsBooking + flatsSold);
    item.setAttribute('data-flats-free', flatsFree)

    const dataFlatsFree = item.getAttribute('data-flats-free')

    if (dataFlatsFree === "0") {
        item.classList.add('sold')
        item.setAttribute('data-triger-modal', 'sold')
        item.addEventListener('click', (event) => {
            event.preventDefault();
        })
    }
})

calcInformation()

// const x = 5

// if (x === 1) {
//     console.log("x едентичен 1");
// } else if (x === 2) {
//     console.log('x  больше либо равен 2');
// } else if (x === 3) {
//     console.log('x  больше либо равен 3');
// } else if (x === 4) {
//     console.log('x  больше либо равен 4');
// } else {
//     console.log("Любой другой случай");
// }