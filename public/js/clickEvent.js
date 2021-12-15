const completeTaskButtons = document.querySelectorAll('.completeTaskButton');

for (const btn of completeTaskButtons) {
    btn.addEventListener('click', handleCompleteTaskButton);
}

function handleCompleteTaskButton(e){
    e.target.classList = e.target.classList.contains('fa-circle') ? 'fa fa-check-circle jello-horizontal' : 'fal fa-circle jello-vertical';
}

// const navLinks = document.querySelectorAll('.navbar .nav-item .nav-link');

// for (const navLink of navLinks) {
//     navLink.addEventListener('click', (e) => {
//         console.log(e.target);
//         e.target.classList.add('active');
//     })
// }
