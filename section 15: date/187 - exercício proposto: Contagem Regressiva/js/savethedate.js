(function () {
    const dateEventDOM = document.querySelector('.hero-content h1 span').innerText
    console.log(dateEventDOM)
    
    getDate(dateEventDOM)

    const dateEvent = getDate(dateEventDOM)
    console.log(dateEvent)

    const today = new Date()

    let left = dateEvent.getTime() - today.getTime()

    const oneMinute = 60 * 1000
    const oneHour = 60 * oneMinute
    const oneDay = 24 * oneHour

    // dias
    const daysLeft = parseInt(left / oneDay)
    left = left - (daysLeft * oneDay)
    // horas
    const hoursLeft = parseInt(left / oneHour)
    left = left - (hoursLeft * oneHour)
    // minutos
    const minutesLeft = parseInt(left / oneMinute)
    left = left - (minutesLeft * oneMinute)
    // segundos
    const secondsLeft = parseInt(left / 1000)

    addLeftTime(daysLeft, hoursLeft, minutesLeft, secondsLeft)

    function addLeftTime(d, h, m, s) {
        const p = document.createElement('p')
        p.textContent = `Contagem Regressiva: ${d} dias, ${h} horas, ${m} minutos, ${s} segundos`
        document.querySelector('.hero-content').appendChild(p)
    }

    function getDate(str) {
        const [date, hour] = str.split(" ")
        const [day, month, year] = date.split("/")
        const [h, m] = hour.split("H")
        return new Date(year, month - 1, day, h, m)
    }

})()