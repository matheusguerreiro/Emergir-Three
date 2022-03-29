const produto = {
  nome: 'caneta',
  qtd: 10,
  cor: 'preta',
  comprar(q) {
    if (q > this.qtd) {
      console.log('Não vai rolar a compra.')
    } else {
      this.qtd -= q
    }
  }
}

produto.comprar(3)
console.log(produto)