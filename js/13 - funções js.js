/* 
    # Funções JavaScript #

Uma função JavaScript é um bloco de código projetado para executar uma tarefa específica.

Uma função JavaScript é executada quando "algo" a invoca (chama).
*/

// Exemplo
function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}


/* 
    # Sintaxe da Função JavaScript #

Uma função JavaScript é definida com a palavra- functionchave, seguida por um name , seguido por parênteses () .

Os nomes das funções podem conter letras, dígitos, sublinhados e cifrões (mesmas regras das variáveis).

Os parênteses podem incluir nomes de parâmetros separados por vírgulas:
( parâmetro1, parâmetro2, ... )

O código a ser executado, pela função, é colocado entre chaves: {}
*/

function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

/* 
Os parâmetros da função são listados entre parênteses () na definição da função.

Os argumentos da função são os valores recebidos pela função quando ela é invocada.

Dentro da função, os argumentos (os parâmetros) se comportam como variáveis ​​locais.

Uma Função é muito parecida com um Procedimento ou uma Sub-rotina, em outras linguagens de programação.
*/


/* 
    # Invocação de função #

O código dentro da função será executado quando "algo" invocar (chamar) a função:

Quando ocorre um evento (quando um usuário clica em um botão)
Quando é invocado (chamado) do código JavaScript
Automaticamente (auto-invocado)
*/


/* 
    # Retorno de Função #

Quando o JavaScript atinge uma returninstrução, a função para de ser executada.

Se a função foi invocada a partir de uma instrução, o JavaScript "retornará" para executar o código após a instrução invocada.

As funções geralmente calculam um valor de retorno . O valor de retorno é "retornado" de volta ao "chamador":
*/

// Exemplo
// Calcule o produto de dois números e retorne o resultado:

let x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}

// O resultado em x será: 12


/* 
    # Por que Funções? #

Você pode reutilizar o código: defina o código uma vez e use-o várias vezes.

Você pode usar o mesmo código muitas vezes com argumentos diferentes, para produzir resultados diferentes.
*/

// Exemplo
// Converter Fahrenheit para Celsius:

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius(77);


/* 
O operador () invoca a função

Usando o exemplo acima, toCelsiusrefere-se ao objeto de função e toCelsius()refere-se ao resultado da função.

Acessar uma função sem () retornará o objeto da função em vez do resultado da função.
*/

// Exemplo
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius;


/* 
    # Funções usadas como valores variáveis #

As funções podem ser usadas da mesma maneira que você usa variáveis, em todos os tipos de fórmulas, atribuições e cálculos.
*/

// Exemplo
// Em vez de usar uma variável para armazenar o valor de retorno de uma função:

let x2 = toCelsius(77);
let text = "The temperature is " + x + " Celsius";

// Você pode usar a função diretamente, como um valor de variável:

let text2 = "The temperature is " + toCelsius(77) + " Celsius";


/* 
    # Variáveis ​​locais #

Variáveis ​​declaradas dentro de uma função JavaScript tornam-se LOCAL para a função.

Variáveis ​​locais só podem ser acessadas de dentro da função.
*/

// Exemplo
// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}
// code here can NOT use carName

/* 
Como as variáveis ​​locais são reconhecidas apenas dentro de suas funções, variáveis ​​com o mesmo nome podem ser usadas em funções diferentes.

As variáveis ​​locais são criadas quando uma função é iniciada e excluídas quando a função é concluída.
*/


/* 
    # Função de seta JavaScript #

As funções de seta foram introduzidas no ES6.

As funções de seta nos permitem escrever uma sintaxe de função mais curta:
*/

let myFunction = (a, b) => a * b;

// Antes de:
hello = function() {
  return "Hello World!";
}

// Com função de seta:
hello = () => {
  return "Hello World!";
}

// Fica mais curto! Se a função tiver apenas uma instrução e a instrução retornar um valor, você poderá remover os colchetes e a returnpalavra-chave:

// As funções de seta retornam o valor por padrão:
hello = () => "Hello World!";

// Função de seta com parâmetros:
hello = (val) => "Hello " + val;

// Função de seta sem parênteses:
hello = val => "Hello " + val;


/* 
    # E sobre this? #

O manuseio de thistambém é diferente nas funções de seta em comparação com as funções regulares.

Em suma, com funções de seta não há vinculação de this.

Em funções regulares, a palavra- thischave representava o objeto que chamava a função, que poderia ser a janela, o documento, um botão ou qualquer outra coisa.

Com funções de seta, a palavra- thischave sempre representa o objeto que definiu a função de seta.

Vamos dar uma olhada em dois exemplos para entender a diferença.

Ambos os exemplos chamam um método duas vezes, primeiro quando a página é carregada e novamente quando o usuário clica em um botão.

O primeiro exemplo usa uma função regular e o segundo exemplo usa uma função de seta.

O resultado mostra que o primeiro exemplo retorna dois objetos diferentes (janela e botão), e o segundo exemplo retorna o objeto janela duas vezes, pois o objeto janela é o "dono" da função.
*/

// Exemplo
// Com uma função regular thisrepresenta o objeto que chama a função:

// Regular Function:
hello = function() {
  document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);


// Exemplo
// Com uma função de seta thisrepresenta o proprietário da função:

// Arrow Function:
hello = () => {
  document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);