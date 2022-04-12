/* 

O Browser Object Model (BOM) permite que o JavaScript "fale" com o navegador.

O modelo de objeto do navegador (BOM)
Não existem padrões oficiais para o B rowser O bject M odel (BOM).

Como os navegadores modernos implementaram (quase) os mesmos métodos e propriedades para interatividade do JavaScript, ele é frequentemente chamado de métodos e propriedades do BOM.

*/

/* 

.-------------.
| Window Size |
'-------------'

Duas propriedades podem ser usadas para determinar o tamanho da janela do navegador.

Ambas as propriedades retornam os tamanhos em pixels:

window.innerHeight- a altura interna da janela do navegador (em pixels)
window.innerWidth- a largura interna da janela do navegador (em pixels)

*/

let w = window.innerWidth;
let h = window.innerHeight;

/* 

Outros métodos de janela
Alguns outros métodos:

window.open()- abrir uma nova janela
window.close()- fechar a janela atual
window.moveTo()- mover a janela atual
window.resizeTo()- redimensionar a janela atual

*/

/* 

.---------------.
| Window Screen |
'---------------'

O window.screenobjeto pode ser escrito sem o prefixo da janela.

Propriedades:

screen.width -------- retorna a largura da tela do visitante em pixels.
screen.height ------- retorna a altura da tela do visitante em pixels.
screen.availWidth --- retorna a largura da tela do visitante, em pixels, menos os recursos da interface, como a Barra de Tarefas do Windows.
screen.availHeight -- retorna a altura da tela do visitante, em pixels, menos os recursos da interface, como a Barra de Tarefas do Windows.
screen.colorDepth --- retorna o número de bits usados ​​para exibir uma cor.
screen.pixelDepth --- retorna a profundidade de pixel da tela.

*/

/* 

.-----------------.
| Window Location |
'-----------------'

O window.locationobjeto pode ser usado para obter o endereço da página atual (URL) e redirecionar o navegador para uma nova página.

Localização da janela
O window.locationobjeto pode ser escrito sem o prefixo da janela.

Alguns exemplos:

window.location.href ----- retorna o href (URL) da página atual
window.location.hostname - retorna o nome de domínio do host da web
window.location.pathname - retorna o caminho e o nome do arquivo da página atual
window.location.protocol - retorna o protocolo da web usado (http: ou https:)
window.location.assign() - carrega um novo documento

*/

/* 

.----------------.
| Window History |
'----------------'

O window.historyobjeto pode ser escrito sem o prefixo da janela.

Para proteger a privacidade dos usuários, existem limitações de como o JavaScript pode acessar esse objeto.

Alguns métodos:

history.back() ---- o mesmo que clicar de volta no navegador
history.forward() - o mesmo que clicar para a frente no navegador

*/

/* 

.------------------.
| Window Navigator |
'------------------'

O window.navigator objeto contém informações sobre o navegador do visitante.

Navegador de Janelas
O window.navigator objeto pode ser escrito sem o prefixo da janela.

Alguns exemplos:

navigator.appName ----- retorna o nome do aplicativo do navegador:
navigator.appCodeName - retorna o nome do código do aplicativo do navegador:
navigator.platform ---- retorna a plataforma do navegador (sistema operacional):

navigator.cookieEnabled - retorna true se os cookies estiverem ativados, caso contrário, false:
navigator.product ------- retorna o nome do produto do mecanismo do navegador:
navigator.appVersion ---- retorna informações de versão sobre o navegador:
navigator.userAgent ----- retorna o cabeçalho user-agent enviado pelo navegador ao servidor:
navigator.language ------ retorna o idioma do navegador:
navigator.onLine -------- retorna true se o navegador estiver online:
navigator.javaEnabled() - retorna true se o Java estiver ativado:

*/

/* 

.-------------.
| Popup Boxes |
'-------------'

Caixa de Alerta
^^^^^^^^^^^^^^^
Uma caixa de alerta é frequentemente usada se você quiser garantir que as informações cheguem ao usuário.

Quando uma caixa de alerta aparecer, o usuário terá que clicar em "OK" para prosseguir.

Sintaxe
window.alert("sometext");
O window.alert() método pode ser escrito sem o prefixo da janela.

Exemplo
alert("I am an alert box!");


Caixa de confirmação
^^^^^^^^^^^^^^^^^^^^
Uma caixa de confirmação é frequentemente usada se você deseja que o usuário verifique ou aceite algo.

Quando uma caixa de confirmação aparecer, o usuário terá que clicar em "OK" ou "Cancelar" para continuar.

Se o usuário clicar em "OK", a caixa retornará true . Se o usuário clicar em "Cancelar", a caixa retornará false .

Sintaxe
window.confirm("sometext");
O window.confirm() método pode ser escrito sem o prefixo da janela.

Exemplo
if (confirm("Press a button!")) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}


Caixa de Prompt
^^^^^^^^^^^^^^^
Uma caixa de prompt geralmente é usada se você quiser que o usuário insira um valor antes de entrar em uma página.

Quando uma caixa de prompt aparecer, o usuário terá que clicar em "OK" ou "Cancelar" para continuar depois de inserir um valor de entrada.

Se o usuário clicar em "OK" a caixa retornará o valor de entrada. Se o usuário clicar em "Cancelar" a caixa retornará null.

Sintaxe
window.prompt("sometext","defaultText");
O window.prompt() método pode ser escrito sem o prefixo da janela.

Exemplo
let person = prompt("Please enter your name", "Harry Potter");
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "! How are you today?";
}


Quebras de linha
^^^^^^^^^^^^^^^^
Para exibir quebras de linha dentro de uma caixa pop-up, use uma barra invertida seguida do caractere n.

Exemplo
alert("Hello\nHow are you?");

*/

/* 

.---------------.
| Timing Events |
'---------------'

Eventos de tempo
^^^^^^^^^^^^^^^^
O windowobjeto permite a execução de código em intervalos de tempo especificados.

Esses intervalos de tempo são chamados de eventos de tempo.

Os dois métodos principais a serem usados ​​com JavaScript são:

setTimeout(function, milliseconds)
Executa uma função, após aguardar um número especificado de milissegundos.

setInterval(function, milliseconds)
O mesmo que setTimeout(), mas repete a execução da função continuamente.
O setTimeout() e setInterval() são ambos os métodos do objeto HTML DOM Window.


O método setTimeout()
^^^^^^^^^^^^^^^^^^^^^
window.setTimeout(function, milliseconds);
O window.setTimeout()método pode ser escrito sem o prefixo da janela.

O primeiro parâmetro é uma função a ser executada.

O segundo parâmetro indica o número de milissegundos antes da execução.

Como parar a execução?
^^^^^^^^^^^^^^^^^^^^^^
O clearTimeout()método interrompe a execução da função especificada em setTimeout().

window.clearTimeout(timeoutVariable)
O window.clearTimeout()método pode ser escrito sem o prefixo da janela.

O clearTimeout()método usa a variável retornada de setTimeout():

myVar = setTimeout(function, milliseconds);
clearTimeout(myVar);
Se a função ainda não foi executada, você pode interromper a execução chamando o clearTimeout() método:


O método setInterval()
^^^^^^^^^^^^^^^^^^^^^^
O setInterval()método repete uma determinada função em cada intervalo de tempo determinado.

window.setInterval(function, milliseconds);
O window.setInterval()método pode ser escrito sem o prefixo da janela.

O primeiro parâmetro é a função a ser executada.

O segundo parâmetro indica a duração do intervalo de tempo entre cada execução.

Este exemplo executa uma função chamada "myTimer" uma vez a cada segundo (como um relógio digital).

Como parar a execução?
^^^^^^^^^^^^^^^^^^^^^^
O clearInterval() método interrompe as execuções da função especificada no método setInterval().

window.clearInterval(timerVariable)
O window.clearInterval() método pode ser escrito sem o prefixo da janela.

O clearInterval() método usa a variável retornada de setInterval():

let myVar = setInterval(function, milliseconds);
clearInterval(myVar);

*/

/* 

.---------.
| Cookies |
'---------'

Os cookies permitem que você armazene informações do usuário em páginas da web.

O que são Cookies?
^^^^^^^^^^^^^^^^^^
Cookies são dados, armazenados em pequenos arquivos de texto, em seu computador.

Quando um servidor da Web envia uma página da Web para um navegador, a conexão é encerrada e o servidor esquece tudo sobre o usuário.

Os cookies foram inventados para resolver o problema "como lembrar informações sobre o usuário":

Quando um usuário visita uma página da web, seu nome pode ser armazenado em um cookie.
Na próxima vez que o usuário visitar a página, o cookie "lembra" seu nome.
Os cookies são salvos em pares nome-valor como:

username = John Doe
Quando um navegador solicita uma página da Web de um servidor, os cookies pertencentes à página são adicionados à solicitação. Dessa forma, o servidor obtém os dados necessários para "lembrar" informações sobre os usuários.

Nenhum dos exemplos abaixo funcionará se o seu navegador tiver o suporte a cookies locais desativado.

Criar um cookie com JavaScript
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
JavaScript pode criar, ler e excluir cookies com a document.cookie propriedade.

Com JavaScript, um cookie pode ser criado assim:

document.cookie = "username=John Doe";
Você também pode adicionar uma data de expiração (em hora UTC). Por padrão, o cookie é excluído quando o navegador é fechado:

document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
Com um parâmetro de caminho, você pode informar ao navegador a qual caminho o cookie pertence. Por padrão, o cookie pertence à página atual.

document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
PROPAGANDA

Ler um cookie com JavaScript
^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Com JavaScript, os cookies podem ser lidos assim:

let x = document.cookie;
document.cookieretornará todos os cookies em uma string como: cookie1=valor; cookie2=valor; cookie3=valor;

Alterar um cookie com JavaScript
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Com JavaScript, você pode alterar um cookie da mesma forma que o cria:

document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
O cookie antigo é substituído.

Excluir um cookie com JavaScript
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
A exclusão de um cookie é muito simples.

Você não precisa especificar um valor de cookie ao excluir um cookie.

Basta definir o parâmetro expires para uma data passada:

document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
Você deve definir o caminho do cookie para garantir que exclua o cookie correto.

Alguns navegadores não permitem que você exclua um cookie se você não especificar o caminho.

A sequência de cookies
^^^^^^^^^^^^^^^^^^^^^^
A document.cookiepropriedade se parece com uma string de texto normal. Mas não é.

Mesmo se você escrever uma string de cookie inteira em document.cookie, ao lê-la novamente, poderá ver apenas o par nome-valor dela.

Se você definir um novo cookie, os cookies mais antigos não serão substituídos. O novo cookie é adicionado a document.cookie, portanto, se você ler document.cookie novamente, obterá algo como:

cookie1 = valor; cookie2 = valor;

Exibir todos os cookies  Criar Cookie 1  Criar Cookie 2 Excluir Cookie 1  Excluir Cookie 2

Se você deseja encontrar o valor de um cookie especificado, deve escrever uma função JavaScript que procure o valor do cookie na string do cookie.

Exemplo de cookie JavaScript
^^^^^^^^^^^^^^^^^^^^^^^^^^^^
No exemplo a seguir, criaremos um cookie que armazena o nome de um visitante.

A primeira vez que um visitante chega à página web, ele/ela será solicitado a preencher seu nome. O nome é então armazenado em um cookie.

Da próxima vez que o visitante chegar à mesma página, ele receberá uma mensagem de boas-vindas.

Para o exemplo vamos criar 3 funções JavaScript:

Uma função para definir um valor de cookie
Uma função para obter um valor de cookie
Uma função para verificar um valor de cookie

Uma função para definir um cookie
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Primeiro, criamos um function que armazena o nome do visitante em uma variável de cookie:

Exemplo
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
Exemplo explicado:

Os parâmetros da função acima são o nome do cookie (cname), o valor do cookie (cvalue) e o número de dias até que o cookie expire (exdays).

A função define um cookie adicionando o nome do cookie, o valor do cookie e a string de expiração.

Uma função para obter um cookie
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Em seguida, criamos um functionque retorna o valor de um cookie especificado:

Exemplo
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
Função explicada:

Tome o cookiename como parâmetro (cname).

Crie uma variável (nome) com o texto a ser pesquisado (cname + "=").

Decodifique a string do cookie, para lidar com cookies com caracteres especiais, por exemplo, '$'

Divida document.cookie em ponto e vírgula em um array chamado ca (ca = decodedCookie.split(';')).

Percorra o array ca (i = 0; i < ca.length; i++) e leia cada valor c = ca[i]).

Se o cookie for encontrado (c.indexOf(name) == 0), retorne o valor do cookie (c.substring(name.length, c.length).

Se o cookie não for encontrado, retorne "".

Uma função para verificar um cookie
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Por último, criamos a função que verifica se um cookie está definido.

Se o cookie estiver definido, ele exibirá uma saudação.

Se o cookie não estiver definido, ele exibirá uma caixa de prompt, solicitando o nome do usuário, e armazena o cookie do nome de usuário por 365 dias, chamando a setCookiefunção:

Exemplo
function checkCookie() {
  let username = getCookie("username");
  if (username != "") {
   alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
      setCookie("username", username, 365);
    }
  }
}

Todos juntos agora
^^^^^^^^^^^^^^^^^^
Exemplo
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}
O exemplo acima executa a checkCookie()função quando a página é carregada.

*/