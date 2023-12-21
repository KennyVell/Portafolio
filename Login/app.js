let personas = [
    {nombre: 'Kenneth', email:'kenneth.geme1@gmail.com', password:'d562f44'},
    {nombre: 'Pedro', email:'pedro10@gmail.com', password:'12345'},
    {nombre: 'Lorena', email:'lorenaes@gmail.com', password:'aguapanela'}
]

function login(){
    let email = document.querySelector('#typeEmailX');
    let password = document.querySelector('#typePasswordX');
    let parrafo = document.querySelector('p.text-white-50');
    if(email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)){
        email.classList.add("is-valid");
        email.classList.replace("is-invalid","is-valid");
    } else{
        email.classList.add("is-invalid");
        email.classList.replace("is-valid","is-invalid");
        parrafo.innerText = `The email address or password is incorrect. please try again!`;
    }

    if(password.value != ""){
        password.classList.add("is-valid");
        password.classList.replace("is-invalid","is-valid");
    } else{
        password.classList.add("is-invalid");
        password.classList.replace("is-valid","is-invalid");
        parrafo.innerText = `The email address or password is incorrect. please try again!`;            
    }

    if(email.value == "" && password.value == ""){
        parrafo.innerText = `Please enter your email and password!`;
    }

    personas.forEach(persona=>{

        if(email.value == persona.email && password.value == persona.password){
            sessionStorage.setItem('nombre',persona.nombre);
            location.href = "./home.html";
        }        
    });
}

document.addEventListener("keypress", (event)=>{
    if(event.key == "Enter"){
        login();
    }
})