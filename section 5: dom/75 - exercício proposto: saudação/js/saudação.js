(function () {
  const nomeUsuario = null
  const elemento = document.querySelector(".top-bar p")
  // document.querySelector('.top-bar p').textContent = `${nomeUsuario}` OU
  if (nomeUsuario) {
    // elemento.textContent = 'Matheus' OU
    // elemento.textContent = elemento.textContent + nomeUsuario OU
    // elemento.textContent += nomeUsuario
    elemento.innerHTML += `<strong>${nomeUsuario}</strong>`
  } else {
    // elemento.parentElement.style.display = "none"
    // elemento.remove()
    const elementoParaRemover = elemento.parentElement
    elementoParaRemover.parentElement.removeChild(elementoParaRemover)
  }
})()