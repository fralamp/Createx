const plusIcon = document.querySelector('.accordion__plus-img')
const minusIcon = document.querySelector('.accordion__minus-img')

// document.querySelectorAll('.accordion__content').forEach((item) =>
//     item.addEventListener('click', () =>{
//         const parent = item.parentNode
//         const imgMinus = item.childNodes.classList('.accordion__minus-img')
//         const imgPlus = item.childNodes.classList('.accordion__plus-img')

//         if(parent.classList.contains('accordion__item--active') && imgMinus[0].style.display = 'block'){
//             parent.classList.remove('accordion__item--active')
//             minusIcon.style.display = 'none'
//             plusIcon.style.display = 'block'
//         } else {
//             document
//                 .querySelectorAll('.accordion__item')
//                 .forEach((child) => child.classList.remove('accordion__item--active'))

//             parent.classList.add('accordion__item--active')
//             minusIcon.style.display = 'block'
//             plusIcon.style.display = 'none'
//         }
//     } )
// )

document.querySelectorAll('.accordion__content').forEach((item) =>
    item.addEventListener('click', () =>{
        const parent = item.parentNode
        const imgMinus = item.childNodes
        // const imgPlus = item.childNodes.classList('.accordion__plus-img')

        if(parent.classList.contains('accordion__item--active') ){
            parent.classList.remove('accordion__item--active')
            minusIcon.style.display = 'none'
            plusIcon.style.display = 'block'
        } else {
            document
                .querySelectorAll('.accordion__item')
                .forEach((child) => child.classList.remove('accordion__item--active'))

            parent.classList.add('accordion__item--active')
            minusIcon.style.display = 'block'
            plusIcon.style.display = 'none'
        }
    } )
)

// document.querySelectorAll('.accordion__content').forEach((item) =>
//     item.addEventListener('click', () =>{
//         const parent = item.parentNode
//         // const imgMinus = item.childNodes
//         // const imgPlus = item.childNodes.classList('.accordion__plus-img')

//         if(parent.classList.contains('accordion__item--active')){
//             parent.classList.remove('accordion__item--active')
//             minusIcon.style.display = 'none'
//             plusIcon.style.display = 'block'
//         } else {
//             document
//                 .querySelectorAll('.accordion__item')
//                 .forEach((child) => child.classList.remove('accordion__item--active'))

//             parent.classList.add('accordion__item--active')
//             minusIcon.style.display = 'block'
//             plusIcon.style.display = 'none'
//         }
//     } )
// )