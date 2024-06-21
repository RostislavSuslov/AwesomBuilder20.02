const buildItem = document.querySelectorAll('.build-item')

const cellAdress = document.querySelector('#address')
const cellFlats = document.querySelector('#flats')
const cellFlatsFree = document.querySelector('#flats-free')
const cellFlatsBooking = document.querySelector('#flats-booking')
const cellFlatsSold = document.querySelector('#flats-sold')
 
 

const showInformation =(cell, attr)=> buildItem.forEach(object => {
    object.addEventListener('mouseover', ()=> {
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

const calcInformation = ()=> buildItem.forEach(item => {
    let flats =  Number(item.getAttribute('data-flats'));
    let flatsBooking = Number(item.getAttribute('data-flats-booking'))
    let flatsSold = Number(item.getAttribute('data-flats-sold'))
 
    let flatsFree = flats - (flatsBooking + flatsSold);
    item.setAttribute('data-flats-free', flatsFree)

    const dataFlatsFree = item.getAttribute('data-flats-free')
    dataFlatsFree === "0" ? item.classList.add('sold') : undefined;
})

calcInformation()
 