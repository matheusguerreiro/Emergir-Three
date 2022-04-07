/* A tag <script>

Em HTML, o código JavaScript é inserido entre as tags <script> e </script>

Exemplo
<script>
  document.getElementById("demo").innerHTML = "My First JavaScript";
</script> */


/* Funções e eventos JavaScript

Uma function JavaScript é um bloco de código JavaScript, que pode ser executado quando "chamado".

Por exemplo, uma função pode ser chamada quando ocorre um evento , como quando o usuário clica em um botão. */


/* JavaScript em <head> ou <body>

Você pode colocar qualquer número de scripts em um documento HTML.

Os scripts podem ser colocados no <body>, ou na <head>seção de uma página HTML, ou em ambos. */


/* JavaScript em <body>

Neste exemplo, uma function JavaScript é colocado na seção <body> de uma página HTML.

A função é invocada (chamada) quando um botão é clicado: 


<!DOCTYPE html>
<html>
<body>

<h2>Demo JavaScript in Body</h2>

<p id="demo">A Paragraph</p>

<button type="button" onclick="myFunction()">Try it</button>

<script>
  function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }
</script>

</body>
</html>*/


/* JavaScript externo

Os scripts também podem ser colocados em arquivos externos: 


Scripts externos são práticos quando o mesmo código é usado em muitas páginas web diferentes.

Os arquivos JavaScript têm a extensão de arquivo .js

Para usar um script externo, coloque o nome do arquivo de script no atributo src (source) de uma tag <script>:

Exemplo
<script src="myScript.js"></script>

Scripts externos não podem conter tags <script>.*/


/* Vantagens externas do JavaScript

Colocar scripts em arquivos externos tem algumas vantagens:

Separa HTML e código
Torna o HTML e o JavaScript mais fáceis de ler e manter
Arquivos JavaScript em cache podem acelerar o carregamento da página
Para adicionar vários arquivos de script a uma página - use várias tags de script: */