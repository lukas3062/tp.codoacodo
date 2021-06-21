const enviar = document.getElementById('sub');
enviar.addEventListener('click',()=>{
  const email = document.getElementById('usser').value;
  const pass = document.getElementById('pass').value;

  if (pass.length === 0) {
    alert('Campo de contraseña vacio.')
  } else {
    if (email.length === 0) {
      alert('Campo de email vacio.')
    }else{
      if (email.indexOf('@') != -1) {
        document.querySelector('.formulario').classList.add('no-ver');
        document.querySelector('.ingresar').classList.remove('no-ver');
        document.querySelector('.ingresar').classList.add('ver');
      } else {
        alert('Falta el arroba en el usuario');
      }
    }
  }

})
