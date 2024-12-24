const cardBtn = document.querySelectorAll('.card__product');

// Define URLs for redirection
const productURLs = [
  '/pages/attendance.html',     // Redirect for the first card (Monitor)
  '/pages/course.html',    // Redirect for the second card (Speakers)
  '/pages/fee.html', // Redirect for the third card (Cooling Fan)
  '/pages/grade.html',    // Redirect for the fourth card (Keyboard)
  '/pages/student.html', // Redirect for the fifth card (GPU Graphics)
  '/pages/timetable.html'          // Redirect for the sixth card (Connection USB)
];

// Redirect on card click
cardBtn.forEach((card, index) => {
  card.addEventListener('click', () => {
    window.location.href = productURLs[index]; // Redirect to the respective page
  });
});














// /*=============== CARD POPUP JS ===============*/
// const modal = document.querySelectorAll('.modal'),
//       cardBtn = document.querySelectorAll('.card__product'),
//       modalClose = document.querySelectorAll('.modal__close'),
//       modalCard = document.querySelectorAll('.modal__card')

// let activeModal = (modalClick) =>{
//    modal[modalClick].classList.add('active-modal')
// }

// /* Show modal */
// cardBtn.forEach((cardBtn, i) =>{
//    cardBtn.addEventListener('click', () =>{
//       activeModal(i)
//    })
// })



// /* Hide modal on background click */
// modal.forEach((modal) =>{
//    modal.addEventListener('click', () =>{
//       modal.classList.remove('active-modal')
//    })
// })

// /* Don't hide modal on card click (by event propagation) */
// modalCard.forEach((modalCard) =>{
//    modalCard.addEventListener('click', (e) =>{
//       e.stopPropagation()
//    })
// })


