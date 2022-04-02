;(function(){
  "use strict"

  // variáveis
  const itemInput = document.getElementById("item-input")
  const todoAddForm = document.getElementById("todo-add")
  const ul = document.getElementById("todo-list")
  const lis = ul.getElementsByTagName("li")

  let arrTasks = [
    {
      name: 'task 1',
      createAt: Date.now(),
      completed: false
    }
  ]


  function generateLiTask(obj) {
    const li = document.createElement("li")
    li.className = "todo-item"
      const button = document.createElement("button")
      button.className = "button-check"
      button.setAttribute("data-action", "button")
      button.setAttribute("data-action", "button")
        const ic = document.createElement("i")
        ic.className = `fas fa-check ${obj.completed ? "" : "displayNone"}`
        button.appendChild(ic)
      const p = document.createElement("p")
      p.className = "task-name"
      p.textContent = obj.name
      const ie = document.createElement("i")
      ie.className = "fas fa-edit"
      ie.setAttribute("data-action", "ie")
      const div = document.createElement("div")
      div.className = "editContainer"
        const input = document.createElement("input")
        input.className = "editInput"
        input.value = obj.name
        input.setAttribute("type", "text")
        const button2 = document.createElement("button")
        button2.className = "editButton"
        button2.setAttribute("data-action", "button2")
        button2.textContent = "Edit"
        const button3 = document.createElement("button")
        button3.className = "cancelButton"
        button3.setAttribute("data-action", "button3")
        button3.textContent = "Cancel"
        div.appendChild(input)
        div.appendChild(button2)
        div.appendChild(button3)
      const il = document.createElement("i")
      il.className = "fas fa-trash-alt"
      il.setAttribute("data-action", "il")
    li.appendChild(button)
    li.appendChild(p)
    li.appendChild(ie)
    li.appendChild(div)
    li.appendChild(il)
    /* li.addEventListener("click", function(e) {
      console.log(this)
    }) */
    // ul.appendChild(li)
    return li
  }

  function renderTasks() {
    ul.innerHTML = ""
    arrTasks.forEach(taskObj => {
      ul.appendChild(generateLiTask(taskObj))
    });
  }

  

  function addTask(t) {
    arrTasks.push({
      name: t,
      createAt: Date.now(),
      complete: false
    })
  }

  function clickedUl(e) {
    const dataAction = e.target.getAttribute("data-action")
    // console.log(dataAction)
    console.log(lis)

    if (!dataAction) return

    let atualLI = e.target
    while (atualLI.nodeName !== "LI") {
      atualLI = atualLI.parentElement
    }
    // console.log(atualLI)

    const atualLiIndex = [...lis].indexOf(atualLI)
    // console.log(atualLiIndex)
    

    switch(dataAction) {
      case "ie":
        const editC = atualLI.querySelector(".editContainer")
        
        ;[...ul.querySelectorAll(".editContainer")].forEach(container => {
          container.removeAttribute("style")
        })

        editC.style.display = "flex"
        editC.querySelector(".editInput").focus()
        break
      case "il":
        arrTasks.splice(atualLiIndex, 1)
        renderTasks() // ou
        // atualLI.remove() ou
        // atualLI.parentElement.removeChild(atualLI)
        break
      case "button":
        arrTasks[atualLiIndex].completed = !arrTasks[atualLiIndex].completed
        if (arrTasks[atualLiIndex].completed) {
          atualLI.querySelector(".fa-check").classList.remove("displayNone")
        } else {
          atualLI.querySelector(".fa-check").classList.add("displayNone")
        }
        renderTasks()
        break
      case "button2":
        const valor = atualLI.querySelector(".editInput").value
        arrTasks[atualLiIndex].name = valor
        renderTasks()
        break
      case "button3":
        atualLI.querySelector(".editContainer").style = "none"
        atualLI.querySelector(".editInput").value = arrTasks[atualLiIndex].name
        break
      default:
        console.log("NÃO É DATA-ACTION")
    }    

  }

  todoAddForm.addEventListener("submit", function(e) {
    e.preventDefault() // para não enviar
    /* ul.innerHTML += `
      <li class="todo-item">
        <button class="button-check">
            <i class="fas fa-check displayNone"></i>
        </button>
        <p class="task-name">${itemInput.value}</p>
        <i class="fas fa-edit"></i>
        <i class="fas fa-trash-alt"></i>
      </li>
    ` */
    addTask(itemInput.value)
    renderTasks()
    itemInput.value = ""
    itemInput.focus()
  })

  ul.addEventListener("click", clickedUl)

  renderTasks()

  /* ;[...lis].forEach(li => {
    li.addEventListener("click", function(e) {
    })
  }); */

})()