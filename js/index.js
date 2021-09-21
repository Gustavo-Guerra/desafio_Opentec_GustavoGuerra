let eye = document.querySelector('.olho')

eye.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type')== 'password'){
        inputSenha.setAttribute('type', 'text')
        eye.className='olho fas fa-eye-slash'; 
    } else{
        inputSenha.setAttribute('type', 'password')
        eye.className='olho fas fa-eye'; 
    }
})

async function logar (){
    let nome = document.querySelector('#nome')
    let email = document.querySelector('#email')
    let senha = document.querySelector('#senha')
    
    let listaUsuario = []
    let userValide = {
        nome: '',
        email: '',
        senha: ''
    }

    listaUsuario=JSON.parse(localStorage.getItem('dadosUsuario'))
    console.log(listaUsuario)
    let result = false

    listaUsuario.forEach((item)=>{
        if(email.value == item.email && senha.value == item.senha){
            userValide = {
                nome: item.nome,
                email: item.email,
                senha: item.senha
            }       
            result=true           
        }
    })
    if(result){
       await swal('Alerta!', `Olá ${userValide.email} , seja bem vindo`, 'success')
    }else{
       await swal('Alerta!', 'Email e/ou senha incorretos.', 'error')
    }
    return result
}
