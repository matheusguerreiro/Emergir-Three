(function() {
  let elementos = [...document.querySelectorAll('[data-addclass-on-scroll]')]
  
  window.addEventListener('scroll', addClasseNoScroll)

  function isElementIntoView(el) {
    let rect = el.getBoundingClientRect()
    return (
      (rect.top <= 0 && rect.bottom >= 0) || (rect.top >= 0 && rect.bottom <= innerHeight)
    )
  }

  function addClasseNoScroll() {
    if (elementos.length === 0) {
      window.removeEventListener('scroll', addClasseNoScroll)
      console.log('evento removido com sucesso')
    }

    elementos.forEach(el => {
      if (isElementIntoView(el)) {
        let delay = parseInt(el.getAttribute('data-addclass-on-scroll-delay')) || 0

        setTimeout(function() {
          let _class = el.getAttribute('data-addclass-on-scroll')
          el.classList.add(_class)
          el.removeAttribute('data-addclass-on-scroll')
          el.removeAttribute('data-addclass-on-scroll-delay')
          elementos = [...document.querySelectorAll('[data-addclass-on-scroll]')]
        }, delay)
      }
    })
  }
  addClasseNoScroll()
})()