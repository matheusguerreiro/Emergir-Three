(function() {
  window.addEventListener('scroll', posicaoImagem)

  const dataParalaxContainer = [...document.querySelectorAll('[data-paralax]')]

  function pegarNovaPosicao(c) {
    const v = parseFloat(c.getAttribute('data-p-velocity')) || .5
    return c.getBoundingClientRect().top * v * -1
  }

  function posicaoImagem() {
    dataParalaxContainer.forEach(c => {
      let originalPosicaoY = getComputedStyle(c).backgroundPositionY
      let originalPosicaoX = getComputedStyle(c).backgroundPositionX

      console.log(originalPosicaoX, originalPosicaoY)

      if (c.getBoundingClientRect().top <= 0) {
        c.style.backgroundPosition = `${originalPosicaoX} ${pegarNovaPosicao(c)}px`
      } else {
        c.style.backgroundPosition = `${originalPosicaoX} 0px`
      }
    })
  }

  posicaoImagem()

})()