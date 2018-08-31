//função para usuário e senha

function logar(login,password){

   
    if(login===123456 && password===9999){
        console.log('Acesso permitido')
    } else{
        console.log('Usuário ou senha incorretos. Tente novamente!')
    }
}

logar(12345,9999)
