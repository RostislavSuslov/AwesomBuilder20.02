const flatArr = [{
        id: 0,
        house: '2',
        floor: '1',
        flatNumber: '1',
        rooms: '3',
        square: '82.3 м²',
        price: '720$',
        priceTotal: '57610$',
        status: 'action',
    },
    {
        id: 1,
        house: "2",
        floor: "1",
        flatNumber: "2",
        rooms: "2",
        square: "60,7м²",
        price: "700$",
        priceTotal: "42490$",
        status: "already-sold",
    },
    {
        id: 2,
        house: "2",
        floor: "1",
        flatNumber: "3",
        rooms: "3",
        square: "60,7м²",
        price: "700$",
        priceTotal: "42490$",
        status: "action",
    },
    {
        id: 3,
        house: "2",
        floor: "1",
        flatNumber: "4",
        rooms: "3",
        square: "82м²",
        price: "700$",
        priceTotal: "57400$",
        status: "booking",
    },
    {
        id: 4,
        house: "2",
        floor: "1",
        flatNumber: "5",
        rooms: "3",
        square: "79.7м²",
        price: "700$",
        priceTotal: "55790$",
        status: "booking",
    },
    {
        id: 5,
        house: "2",
        floor: "1",
        flatNumber: "6",
        rooms: "1",
        square: "39.2м²",
        price: "700$",
        priceTotal: "27440$",
        status: "free",
    },
    {
        id: 6,
        house: "2",
        floor: "1",
        flatNumber: "7",
        rooms: "1",
        square: "40.0м²",
        price: "700$",
        priceTotal: "29400$",
        status: "booking",
    },
    {
        id: 7,
        house: "2",
        floor: "1",
        flatNumber: "8",
        rooms: "1",
        square: "39.2м²",
        price: "700$",
        priceTotal: "27440$",
        status: "already-sold",
    },
    {
        id: 8,
        house: "2",
        floor: "1",
        flatNumber: "9",
        rooms: "3",
        square: "79.3м²",
        price: "700$",
        priceTotal: "55510$",
        status: "action",
    },
]

const installFloor = () => {
    const flats = document.querySelectorAll('.flat')
    const flatInfo = document.querySelector('.floor-options')

    const removeActiveClass = () => flats.forEach(item => {
        item.classList.remove('active')
    })

    const setInitialActive =()=> {
        const firstFlatSelector = document.querySelector('.flat')
        firstFlatSelector.classList.add('active')
    }
    setInitialActive()

    const initialValue = [flatArr[1]]
    console.log(initialValue);

    const renderInformation = (array) => {
        const flatInformation = array.map(item => {
            return (`
                <div class="floor-option-item">
                    <div>Номер дому:</div>
                    <div><h2>${item.house}</h2></div>
                </div>
                <div class="floor-option-item">
                    <div>Поверх:</div>
                    <div><h2>${item.floor}</h2></div>
                </div>
                <div class="floor-option-item">
                    <div>Номер квартири:</div>
                    <div><h2>${item.flatNumber}</h2></div>
                </div>
                <div class="floor-option-item">
                    <div>Кількість кімнат:</div>
                    <div><h2>${item.rooms}</h2></div>
                </div>
                <div class="floor-option-item">
                    <div>Площа квартири:</div>
                    <div><h2>${item.square}</h2></div>
                </div>
                <div class="floor-option-item">
                    <div>Ціна за м²:</div>
                    <div> <h2>${item.price}</h2></div>
                </div>
                <div class="floor-option-item">
                    <div>Ціна за квартиру:</div>
                    <div><h2>${item.priceTotal}</h2></div>
                </div>
                <div class="floor-option-item">
                    <div>Статус квартири:</div>
                    <div><h2>${item.status}</h2></div>
                </div>
                   <div class="floor-option-item">
                    <a href="#" class="btn btn-warning">Оглянути квартиру</a>
                </div>
            `)
        })

        flatInfo.innerHTML = flatInformation 
    }
    renderInformation(initialValue)
 


    flats.forEach(flat => {
        flat.addEventListener('click', () => {
            removeActiveClass()
            flat.classList.add('active')
            const thisFlat = flat.getAttribute('data-flat-number')
            const flatNumber = flatArr.filter(item => item.flatNumber === thisFlat)
            renderInformation(flatNumber)
        })

        const setFlatStatus =()=> flatArray.find(item => {
			const thisFlat = flat.getAttribute('data-flat-number')
			if (item.flatNumber === Number(thisFlat)) {
				console.log(item.status)
				flat.classList.add(item.status)
			}
		});
		setFlatStatus();


        if (flat.classList.contains('action')) {
            flat.querySelector('.flat-staus').innerHTML = 'Акція'
        } else if (flat.classList.contains('booking')) {
            flat.querySelector('.flat-staus').innerHTML = 'Бронь'
        } else if (flat.classList.contains('sold')) {
            flat.querySelector('.flat-staus').innerHTML = 'Продано'
        } else {
            flat.querySelector('.flat-staus').innerHTML = 'Вільна'
        }
    })
}

document.querySelector('.page-floor') ? installFloor() : null;