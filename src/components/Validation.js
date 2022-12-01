const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPass = /^[A-Za-z\d$@$!%*?&](?=.*\d)[^'\s]/;

export default function Validation(userData) {

    const errors = {};

    if (!userData.username){
        errors.username = "El nombre del usuario tiene que ser un Email"
    } else if (!regexEmail.test(userData.username)) {
        errors.username = "Debe ser un Email valido"
    } else if (userData.username.length > 35) {
        errors.username = "El Email no puede tener mas de 35 caracteres"
    }

    if (!userData.password) {
        errors.password = "Ingrese una contraseña"
    } else if(!regexPass.test(userData.password)){
        errors.password = "Debe tener al menos un numero"
    } else if (userData.password.length < 6 || userData.password.length > 10){
        errors.password = "Debe tener entre 6 y 10 caracteres"
    }

    return errors;
}