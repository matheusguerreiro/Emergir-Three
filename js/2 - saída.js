/* Possibilidades de exibição de JavaScript

JavaScript pode "exibir" dados de diferentes maneiras:

Escrevendo em um elemento HTML, usando innerHTML.
Escrevendo na saída HTML usando document.write().
Escrevendo em uma caixa de alerta, usando window.alert().
Escrevendo no console do navegador, usando console.log().*/


/* Usando innerHTML

Para acessar um elemento HTML, JavaScript pode usar o método document.getElementById(id).

O atributo id define o elemento HTML. A propriedade innerHTML define o conteúdo HTML:

Alterar a propriedade innerHTML de um elemento HTML é uma maneira comum de exibir dados em HTML. */


/* Usando document.write()

Para fins de teste, é conveniente usar document.write():

O uso de document.write() após o carregamento de um documento HTML excluirá todo o HTML existente:

O método document.write() deve ser usado apenas para teste. */


/* Usando window.alert()

Você pode usar uma caixa de alerta para exibir dados:

Você pode pular a palavra-chave window.

Em JavaScript, o objeto de janela é o objeto de escopo global, o que significa que variáveis, propriedades e métodos por padrão pertencem ao objeto de janela. Isso também significa que especificar a palavra-chave window é opcional: */


/* Usando console.log()

Para fins de depuração, você pode chamar o método console.log() no navegador para exibir dados. */


/* Impressão JavaScript

JavaScript não tem nenhum objeto de impressão ou métodos de impressão.

Você não pode acessar dispositivos de saída do JavaScript.

A única exceção é que você pode chamar o método window.print() no navegador para imprimir o conteúdo da janela atual. */