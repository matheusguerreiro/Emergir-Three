// Objetos de data JavaScript

// Example
const d = new Date();
console.log(d)

// Criando objetos de data
const d1 = new Date();
console.log(d1)

// 7 números especificam ano, mês, dia, hora, minuto, segundo e milissegundo (nessa ordem):
const d2 = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d2)

 /* Nota: JavaScript conta meses de 0 a 11 :

Janeiro = 0 .

Dezembro = 11 .*/

// 6 números especificam ano, mês, dia, hora, minuto, segundo:
const d3 = new Date(2018, 11, 24, 10, 33, 30);
console.log(d3)

// 5 números especificam ano, mês, dia, hora e minuto:
const d4 = new Date(2018, 11, 24, 10, 33);
console.log(d4)

// 4 números especificam ano, mês, dia e hora:
const d14 = new Date(2018, 11, 24, 10);
console.log(d14)

// 3 números especificam ano, mês e dia:
const d5 = new Date(2018, 11, 24);
console.log(d5)

// 2 números especificam ano e mês:
const d6 = new Date(2018, 11);
console.log(d6)

// Você não pode omitir mês. Se você fornecer apenas um parâmetro, ele será tratado como milissegundos.
const d7 = new Date(2018);
console.log(d7)

// Século anterior
// Anos de um e dois dígitos serão interpretados como 19xx:
const d8 = new Date(97, 11, 15);
console.log(d8)

// nova data(dataString)
// new Date(dateString)cria um novo objeto de data a partir de uma string de data :
const d9 = new Date("October 13, 2014 11:13:00");
console.log(d9)

/* JavaScript armazena datas em milissegundos
JavaScript armazena datas como número de milissegundos desde 01 de janeiro de 1970, 00:00:00 UTC (Universal Time Coordinated).

A hora zero é 01 de janeiro de 1970 00:00:00 UTC.

Agora a hora é: 1649337704474 milissegundos após 01 de janeiro de 1970 */

// Um dia (24 horas) é 86 400 000 milissegundos.

// Quando você exibe um objeto de data em HTML, ele é convertido automaticamente em uma string, com o toString() método.
const d10 = new Date();
d10.toString();
console.log(d10)

// O toUTCString()método converte uma data em uma string UTC (um padrão de exibição de data).
const d11 = new Date();
d11.toUTCString();
console.log(d11)

// O toDateString()método converte uma data em um formato mais legível:
const d12 = new Date();
d12.toDateString();
console.log(d12)

// O toISOString()método converte um objeto Date em uma string, usando o formato padrão ISO:
const d13 = new Date();
d13.toISOString();
console.log(d13)


// Entrada de data JavaScript

// Geralmente, existem 3 tipos de formatos de entrada de data JavaScript:

/* Tipo	      Exemplo
   Data ISO	  "2015-03-25" (O Padrão Internacional)
   Data curta	"25/03/2015"
   Data Longa	"25 de março de 2015" ou "25 de março de 2015" */

// O formato ISO segue um padrão estrito em JavaScript.


// Entrada de data - Datas de análise

// Se você tiver uma string de data válida, poderá usar o Date.parse() método para convertê-la em milissegundos.

// Date.parse() retorna o número de milissegundos entre a data e 1º de janeiro de 1970:
let msec = Date.parse("March 21, 2012");
console.log(msec)

// Você pode então usar o número de milissegundos para convertê-lo em um objeto de data:
let msec1 = Date.parse("March 21, 2012");
const d15 = new Date(msec);
console.log(d15)


// Métodos de obtenção de data de JavaScript

// O método getTime()
// O getTime() método retorna o número de milissegundos desde 1º de janeiro de 1970:
const d16 = new Date();
d16.getTime();
console.log(d16)

// O método getFullYear()
// O getFullYear() método retorna o ano de uma data como um número de quatro dígitos:
const d17 = new Date();
d17.getFullYear();
console.log(d17)

// O método getMonth()
// O getMonth() método retorna o mês de uma data como um número (0-11):
const d18 = new Date();
d18.getMonth() + 1;
console.log(d18)

// O método getDate()
// O getDate() método retorna o dia de uma data como um número (1-31):
const d19 = new Date();
d19.getDate();
console.log(d19)

// O método getHours()
// O getHours() método retorna as horas de uma data como um número (0-23):
const d20 = new Date();
d20.getHours();
console.log(d20)

// O método getMinutes()
// O getMinutes() método retorna os minutos de uma data como um número (0-59):
const d21 = new Date();
d21.getMinutes();
console.log(d21)

// O método getSeconds()
// O getSeconds()método retorna os segundos de uma data como um número (0-59):
const d22 = new Date();
d22.getSeconds();
console.log(d22)

// O método getMilliseconds()
// O getMilliseconds()método retorna os milissegundos de uma data como um número (0-999):
const d23 = new Date();
d23.getMilliseconds();
console.log(d23)

// O método getDay()
// O getDay()método retorna o dia da semana de uma data como um número (0-6):
const d24 = new Date();
d24.getDay();
console.log(d24)

// Definir métodos de data

// Os métodos Set Date são usados ​​para definir uma parte de uma data:

/* Method	            Description
   setDate()	        Set the day as a number (1-31)
   setFullYear()	    Set the year (optionally month and day)
   setHours()	        Set the hour (0-23)
   setMilliseconds()	Set the milliseconds (0-999)
   setMinutes()	      Set the minutes (0-59)
   setMonth()	        Set the month (0-11)
   setSeconds()	      Set the seconds (0-59)
   setTime()	        Set the time (milliseconds since January 1, 1970) */