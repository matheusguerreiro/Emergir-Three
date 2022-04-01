(function () {
  `use strict`;

  const btn = document.getElementById("btn")
  const iTitle = document.getElementById("txtTitulo")
  const fForm = document.querySelector(".formCadastro")

  /* btn.addEventListener("click", verificar) */

  // para formulários vamos usar "submit" ao invés de "click"
  fForm.addEventListener("submit", (e) => {
    if (iTitle.value === "" /* ou !iTitle.value */) {
      showErrorMessage("Preencha o Título!", function() {
        iTitle.focus() // coloca o foco no input title
      })
      e.preventDefault() // impede o envio
    }
  })

  const feedbackMessage = document.getElementById("feedbackMessage")
  const feedbackMessageClose = document.getElementsByTagName("button")[0]

  function showErrorMessage(msg, cb) {
    feedbackMessage.classList.add("show")
    feedbackMessage.getElementsByTagName("p")[0].textContent = msg

    feedbackMessageClose.focus()

    function hideErrorMessage() {
      feedbackMessage.classList.remove("show")

      feedbackMessageClose.removeEventListener("click", hideErrorMessage)
      feedbackMessageClose.removeEventListener("keyup", pressedKeyOnBtn)
      if (typeof(cb) === "function") {
        cb()
      }
    }

    function pressedKeyOnBtn(e) {
      console.log(e.keycode)
      console.log(e.key)
      console.log(e)

      if (e.keyCode === 27) {
        hideErrorMessage()
      }
    }

    feedbackMessageClose.addEventListener("click", hideErrorMessage)

    feedbackMessageClose.addEventListener("keyup", pressedKeyOnBtn)
  }
  

  

  /* solução
  const txtD = document.getElementById("txtDescricao")
  const contadorC = document.getElementById("contador")
  const resta = contadorC.getElementsByTagName("span")[0]
  const max = txtD.maxLength

  contadorC.style.display="block"

  txtD.addEventListener("input", function() {
    let numLetDig = this.value.length
    let caracRes = parseInt(max) - parseInt(numLetDig)
    resta.textContent = caracRes
  }) */

  // contador caracteres
  const divContador = document.getElementById("contador")
  const textareaDescricao = document.getElementById("txtDescricao")
  let spanContador = document.querySelector("#contador span")

  let ml = textareaDescricao.maxLength
  spanContador.textContent = ml

  divContador.style.display="block"

  textareaDescricao.addEventListener("input", () => {
    let quantidadeDigitos = textareaDescricao/* ou this */.value.length
    let restante = parseInt(ml) - parseInt(quantidadeDigitos)
    spanContador.textContent = restante
  })

  // botão desabilitado em função do checkbox
  const cb = document.getElementById("chkAceito")
  // desabilitando o botão
  btn.disabled = true

  cb.addEventListener("change", function() {
    btn.disabled = !this.checked
  })


})()