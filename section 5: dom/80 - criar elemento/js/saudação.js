(function () {
  const nomeUsuario = 'Matheus'
  
  if (nomeUsuario) {
    const topBarElemento = document.createElement("div")
    topBarElemento.className = "top-bar"
    topBarElemento.innerHTML = `<p>Olá, <strong>${nomeUsuario}</strong></p>`

    const pai = document.querySelector(".hero")
    pai.insertBefore(topBarElemento, pai.firstElementChild)
  }
  
})()