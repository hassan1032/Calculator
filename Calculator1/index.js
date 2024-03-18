// let String = "";

// let buttons = document.querySelectorAll('.button')
// buttons.forEach((item)=>{
//     buttons.addEventListener('click',(e)=>{
//         console.log(e.target)
//     })
// })

let String = "";

let buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target);
    });
});

