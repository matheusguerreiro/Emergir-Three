function quantoFaltaPara(m, d) {

    const dataAtual = new Date()
    dataAtual.setHours(0)
    dataAtual.setMinutes(0)
    dataAtual.setMilliseconds(0)

    let anoAtual = dataAtual.getFullYear()
    
    let dataAniversario = new Date(anoAtual, m - 1, d)

    let daM = dataAtual.getTime()
    let dAaM = dataAniversario.getTime()

    if (dAaM < daM) {
        dataAniversario.setFullYear(++anoAtual)
        dAaM = dataAniversario.getTime()
    }

    let umDia = 24 * 60 * 60 * 1000

    let falta = dAaM - daM

    return parseInt(falta / umDia) + 1

}
