var email= document.getElementById('email')
var senha = document.getElementById('senha')
var env = document.getElementById('env')

function validar(){
  var nome = formulario.nome;
  if (nome.value == ""){
      alert("preencha o campo a cima");

      nome.focus();
  }
  else if(senha.value ==""){
   alert("informe a senha para entrar")
    senha.focus();
  }
  else if((nome.value != 'j.alves160600@gmail.com')){
          alert("email invalido")
  }
  else if ((nome.value == "j.alves160600@gmail.com") && (senha.value == "12345678")) {
   alert("login realizado")
  }
  else if((senha.value != "12345678")){
    alert("senha invalida")
  } 
}