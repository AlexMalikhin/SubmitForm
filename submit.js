const form = document.querySelector('#formSubmit');
const inputs = document.querySelectorAll('input');
const buttonSubmit = document.querySelector('#send');
const emailError = document.querySelector('#errorEmail');
const emailErrorConfirm = document.querySelector('#errorConfirmEmail');
const passwordError = document.querySelector('#errorPassword');
const passwordErrorConfirm = document.querySelector('#errorConfirmPassword');
const nameError = document.querySelector('#errorFirstname');
const lastnameError = document.querySelector('#errorLastname');
const patronymicError = document.querySelector('#errorPatronymic');
const regExpForEmail = new RegExp('^\\S+@\\S+\\.\\S+$');
const regExpForPassword = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$");

const userData = {
    firstName: null,
    lastName: null,
    patronymic: null,
    email: null,
    password: null,
};

buttonSubmit.addEventListener('click', (e)=>{
    e.preventDefault();
    submitData();
})

const submitData = () =>{
    if(isEmailIdentical() || isEmailEntered()
        || isPasswordIdentical() || isPasswordEntered()
        || isNameEntered() || isPatronymicEntered()
        || isLastnameEntered() || isValidEmail()
        || isValidConfirmEmail() || isValidPassword()
        || isValidConfirmPassword()
    ){
        isValidEmail();
        isValidConfirmEmail();
        isValidPassword();
        isValidConfirmPassword();
        isNameEntered();
        isLastnameEntered();
        isPatronymicEntered();
        isEmailIdentical();
        isEmailEntered();
        isPasswordIdentical();
        isPasswordEntered();
        console.log(regExpForEmail.test(inputs[3].value));
        return;
    }
    getUserData();
    deleteErrors();
    inputs.forEach(input => {
        console.log(regExpForEmail.test(inputs[3].value));
        input.value = '';
    })
}
const deleteErrors = () =>{
    emailError.innerHTML = "";
    emailErrorConfirm.innerHTML = "";
    passwordError.innerHTML = "";
    passwordErrorConfirm.innerHTML = "";
}

const getUserData = () =>{
    userData.firstName = inputs[0].value;
    userData.lastName = inputs[1].value;
    userData.patronymic = inputs[2].value;
    userData.email = inputs[3].value;
    userData.password = inputs[5].value;
    for(let key in userData){
        console.log(`${key}: ${userData[key]}`);
    }
}
const isEmailIdentical = () =>{
    if (inputs[3].value !== inputs[4].value){
        emailError.style.visibility = 'visible';
        emailErrorConfirm.style.visibility = 'visible';
        emailError.innerHTML = "Email'ы не совпадают";
        emailErrorConfirm.innerHTML = "Email'ы не совпадают";
    }
    else{
        emailError.style.visibility = 'hidden';
        emailErrorConfirm.style.visibility = 'hidden';
    }
    return (inputs[3].value !== inputs[4].value);
}
const isPasswordIdentical = () =>{
    if (inputs[5].value !== inputs[6].value){
        passwordError.style.visibility = 'visible';
        passwordErrorConfirm.style.visibility = 'visible';
        passwordError.innerHTML = "Пароли не совпадают";
        passwordErrorConfirm.innerHTML = "Пароли не совпадают";
    }
    else{
        passwordError.style.visibility = 'hidden';
        passwordErrorConfirm.style.visibility = 'hidden';
    }
    return (inputs[5].value !== inputs[6].value);
}
const isNameEntered = () =>{
    if (inputs[0].value === '') {
        nameError.style.visibility = 'visible'
        nameError.innerHTML = 'Введите имя';
        return true;
    }
    else{
        nameError.style.visibility = 'hidden';
    }
}
const isLastnameEntered = () =>{
    if(inputs[1].value === '') {
        lastnameError.style.visibility = 'visible'
        lastnameError.innerHTML = 'Введите фамилию';
        return true;
    }
    else{
        lastnameError.style.visibility = 'hidden';
    }
}
const isPatronymicEntered = () =>{
    if(inputs[2].value === '') {
        patronymicError.style.visibility = 'visible';
        patronymicError.innerHTML = 'Введите отчество';
        return true;
    }
    else{
        patronymicError.style.visibility = 'hidden';
    }
}
const isEmailEntered = () =>{
    if (inputs[3].value === ''){
        emailError.innerHTML = 'Введите Email';
    }
    if (inputs[4].value === '') {
        emailErrorConfirm.innerHTML = 'Подтвердите Email';
    }
    if (inputs[3].value === '' || inputs[4].value === ''){
        return true;
    }
}
const isPasswordEntered = () =>{
    if (inputs[5].value === ''){
        passwordError.innerHTML = 'Введите пароль';
    }
    if (inputs[6].value === '') {
        passwordErrorConfirm.innerHTML = 'Подтвердите пароль';
    }
    if (inputs[5].value === '' || inputs[6].value === ''){
        return true;
    }
}
const isValidPassword = () =>{
    if(regExpForPassword.test(inputs[5].value)){
        inputs[5].innerHTML = 'Введите корректный пароль';
    }
    return (regExpForPassword.test(inputs[5].value))
}
const isValidEmail = () =>{
    if(regExpForEmail.test(inputs[3].value)){
        inputs[3].innerHTML = 'Введите корректный Email';
    }
    return (regExpForEmail.test(inputs[3].value))
}
const isValidConfirmPassword = () =>{
    if(regExpForPassword.test(inputs[6].value)){
        inputs[6].innerHTML = 'Введите корректный Пароль';
    }
    return (regExpForPassword.test(inputs[6].value))
}
const isValidConfirmEmail = () =>{
    if(regExpForEmail.test(inputs[4].value)){
        inputs[4].innerHTML = 'Введите корректный Email';
    }
    return (regExpForEmail.test(inputs[4].value))
}