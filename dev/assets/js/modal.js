const modal = document.querySelector('.modal')
const triger = document.querySelectorAll('[data-triger-modal]')
const modalBody = document.querySelector('.modal-body')

const modalArr = [
    {
        id: 'sold',
        title: 'Нажаль всі квартири продані..(',
        description: 'Вільні квартири знаходяться в будинках, які не продані. Оберіть, будь ласка, іншу будівлю, щоб переглянути квартири своєї мрії!)',
        imgUrl: 'assets/img/sold.png'
    },
    {
        id: 'loginSuccess',
        markup: `
          <form class="form">
            <h4 class="form-title">Залишились питання? Напишіть нам!)</h4>
            <div class="form-column">
                <label for="name">Name</label>
                <input id="name" type="text">
            </div>
            <div class="form-column">
                <label for="tel">Telephone</label>
                <input id="tel" type="tel">
            </div>
            <div class="form-column">
                <label for="answer">You'r answer</label>
                <textarea id="answer"></textarea>
            </div>
            <button class="btn btn-secondary" type="submit" data-close="modal">Ok</button>
            <button class="btn btn-close" data-close="modal"></button>
       </form>`
    },
    {
        id: 'registrationSuccess',
        title: 'Успішна реєстрація',
        description: 'Ви успішно зареєструвалися. Ласка',
        imgUrl: 'assets/img/registrationSuccess.png'
    },
    
]
 
triger.forEach(item => {
    item.addEventListener('click', function() {
        const modalType = item.getAttribute('data-triger-modal')
        showModal(modalType)
    })

   
    /* 1. Получить значение атребута data-triger-modal при клике на кнопку
       2. Вызвать ф-ю showModal и вложить в её аргументы полученный data-attr --> showModal(modalType)
    */

})

function showModal(modalType) {
    const modalData = modalArr.find(item => item.id === modalType)
    
    if (modalData) {
        randerModalContent(modalData)
        modal.classList.add('show')
    }

    /*
        1. Получить нужный объект из массива при помощи .find
        2. В параметры функции randerModalContent передаём объект из массива 
    */
}

function randerModalContent(modalData) {
    if (modalData.markup) {
        modalBody.innerHTML = modalData.markup
    } else {
        modalBody.innerHTML = `<h4 id="title">${modalData.title}</h4>
                               <p>${modalData.description}</p>
                               <img src='${modalData.imgUrl}' alt='${modalData.id}'>
                               <div class="btn-row">
                                   <button class="btn btn-primary" data-close="modal">Ок</button>
                                   <button class="btn btn-close" data-close="modal"></button>
                               </div>`
    }

    const trigerClose = document.querySelectorAll('[data-close="modal"]')

    trigerClose.forEach(triger => {
        triger.addEventListener('click', closeModal)
    })
   
    
    /*
        если у объекта есть ключ markup, тогда мы рендерим html который в значении ключа
        иначе, мы рендерим шаблон в котором подставленны переменные
    */
}
  

function closeModal() {
    modal.classList.remove('show')
}

 
modal.addEventListener('click', (event)=> {
    event.target.classList.remove('show')
})

 