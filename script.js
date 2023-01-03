const eyeOn = document.querySelector('#eye-on');
const eyeOff = document.querySelector('#eye-off');
const inputPassword = document.querySelector('#password')
const buttonSubmit = document.querySelector('.buttonSubmit')

const inputEmail = document.querySelector('#email')
console.log(buttonSubmit);

eyeOn.addEventListener('click', () => {
    
    if (eyeOn.classList.contains === 'eyeDisable') {
        eyeOn.classList.remove('eyeDisable');
    } else {
        eyeOn.classList.add('eyeDisable');
        eyeOff.classList.remove('eyeDisable');
        
        if (inputPassword.getAttribute('type') === 'password') {
            inputPassword.setAttribute('type', 'text');
        }
    }
    
})

eyeOff.addEventListener('click', () => {
    
    if (eyeOff.classList.contains !== 'eyeDisable') {
        eyeOff.classList.add('eyeDisable');
        eyeOn.classList.remove('eyeDisable');
        
        if (inputPassword.getAttribute('type') === 'text') {
            inputPassword.setAttribute('type', 'password');
        }
    }
    
})

buttonSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    let arrayEmail = Array.from(inputEmail.value).join('')
    let arrayPassword = Array.from(inputPassword.value)

    const containerModal = document.querySelector('.container-modal')
    const close = document.querySelector('.close')
    const result = document.querySelector('.result')
    const modal = document.querySelector('.modal')

    console.log(arrayPassword);

    if (arrayEmail.includes('@gmail.com') && arrayPassword.length >= 8) {

        containerModal.style.display = 'flex'
        modal.style.backgroundColor = 'var(--primary-color)'
        result.style.fontSize = '4.5rem'
        result.innerHTML = 'Logado!'
        
        close.addEventListener('click', () => {
            containerModal.style.display = 'none'
            inputEmail.value = ''
            inputPassword.value = ''
        })
    // } else {
    //     containerModal.style.display = 'flex'
    //     modal.style.backgroundColor = '#333'
    //     result.innerHTML = 'Verifique se seus dados estão corretos!'
    //     result.style.fontSize = '2.4rem'
    //     result.style.textAlign = 'center'
    //     result.style.color = 'white'
        
    //     close.addEventListener('click', () => {
    //         containerModal.style.display = 'none'
    //     })
    // }
})