let string = "";
const inputField = document.querySelector('input');

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                // Replace '*' with 'x' in the string
                const evaluatedString = string.replace('x', '*');
                string = eval(evaluatedString);
                inputField.value = string;
            } catch (error) {
                inputField.value = 'Error';
                string = ''; // Clear the string to avoid further errors
            }
        } else if (buttonText === 'AC') { // Handle AC button
            string = '';
            inputField.value = '';
        } else {
            // Append the button text to the string
            string += buttonText;
            inputField.value = string;
        }
    });
});


// let string = "";

// let buttons = document.querySelectorAll('.button');
//   Array.from(buttons).forEach((button) => {
//     button.addEventListener('click', (e) => {
        
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             document.querySelector('input').value = string
//         }
//         else{
//             string = string + e.target.innerHTML;
//             document.querySelector('input').value = string;

//         }
//     });
// });

//
