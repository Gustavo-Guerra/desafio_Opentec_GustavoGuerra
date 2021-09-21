let eye = document.querySelector('.olho')
let nome = document.querySelector('#nome')
let valideNome =  false

let email = document.querySelector('#email')
let valideEmail = false

let senha= document.querySelector('#senha')
let valideSenha = false


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



function validar (){ //valida o cadastro
    let nome = login.nome.value
    let email = login.email.value
    let senha = login.senha.value

    if (nome==""){  
        alert('O campo nome deve estar preenchido.')
        login.nome.focus()
        return false;
    }

    if (email.indexOf('@')== -1){
        alert('Preencha o campo email corretamente.')
        login.email.focus()
        return false;
    }

    if (senha.length<=5){
        alert('A senha deve ter no mínimo 6 caracteres.')
        login.senha.focus()
        return false;
    }

    if(nome!=="" || email.indexOf('@')!==-1 || senha.length>=6){
        let nome = document.getElementById('nome')
        let email = document.getElementById('email')
        let senha = document.getElementById('senha')

        let dados = JSON.parse(localStorage.getItem('dadosUsuario')) 
        if(dados == null){
            localStorage.setItem("dadosUsuario", "[]")
            dados = []
        }

        let auxCadastro = {
            nome: nome.value,
            email: email.value,
            senha: senha.value
        }

        dados.push(auxCadastro);

        localStorage.setItem('dadosUsuario', JSON.stringify(dados));
        alert('Usuário cadastrado com sucesso', 'sucess')
        
        nome.value=""
        email.value=""
        senha.value=""

        location.href='index.html'
    }
}



