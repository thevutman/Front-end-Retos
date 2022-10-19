function lol(){
    if (userrr('lo','lo')==true){
        console.log(1)
        let overlay = document.getElementById('overlay'),
            form = document.getElementById('form__reservation'),
            singUp = document.getElementById('sing_up')
        overlay.classList.add('overlay--active')
        form.classList.add('form__reservation--active')
        singUp.classList.add("form__reservation--desactive")
    }
    else {
        let overlay = document.getElementById('overlay'),
            form = document.getElementById('form__reservation'),
            singUp = document.getElementById('sing_up')
        overlay.classList.add('overlay--active')
        singUp.classList.add('sing_up--active')
        form.classList.add("sing_up--desactive")
    }
}

var idMotorByke
function loll(n){
    idMotorByke = n
}

userrr('l','l')
let user
let password
function userrr(u,p){
    let cl = document.getElementById('nav__bar--items__client'),
        us = document.getElementById('nav__bar--items__user')
    if (u=="lol" && p=="lol"){
        us.classList.add('nav__bar--items__user')
        cl.classList.remove('nav__bar--items__client')
        return true
    }
    else {
        cl.classList.add('nav__bar--items__client')
        us.classList.remove('nav__bar--items__user')
        return false
    }
}

function closedOverlay(n){
    let overlay = document.getElementById('overlay'),
    singUp = document.getElementById('sing_up'),
    form = document.getElementById('form__reservation')

    if (singUp.classList.value=='sing_up--active'){
        overlay.classList.remove('overlay--active')
        form.classList.remove('form__reservation--active')
        singUp.classList.remove('sing_up--active')
        form.classList.remove('form__reservation--desactive')
        singUp.classList.remove('sing_up--desactive')
    }
    else if(n==1){
        overlay.classList.remove('overlay--active')
        singUp.classList.remove('sing_up--active')
        form.classList.remove('form__reservation--active')
        form.classList.remove('form__reservation--desactive')
        singUp.classList.remove('sing_up--desactive')

    }
}