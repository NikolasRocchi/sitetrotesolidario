function calcular(){
    let qtArroz = Number(document.getElementById("qtArroz").value);

    let qtFeijao = Number(document.getElementById("qtFeijao").value);

    let qtOleo = Number(document.getElementById("qtOleo").value);

    let qtMacarrao = Number(document.getElementById("qtMacarrao").value);

    let pontos = (qtArroz * 10) + (qtFeijao * 8) + (qtOleo * 4) + (qtMacarrao * 2)

    let cor = document.getElementById("cor").value
    let metaKit 
    
    if (cor == "amarela"){
        metaKit = 54
    }
    else if (cor == "cinza"){
        metaKit = 51
    }
    else if (cor == "laranha"){
        metaKit = 21
    }
    else if (cor == "marrom"){
        metaKit = 88
    }
    else if (cor == "preta"){
        metaKit = 60
    }
    let metaSuplemento
    let metaLeite = metaKit 
    if (metaKit % 2 == 0) {
        metaSuplemento = metaKit / 2
    }
    else { 
        metaSuplemento = (metaKit / 2) + 0.5
    }
    let metaSangue = metaSuplemento

    let kitAlimentacao = Number(document.getElementById("qtdeKits").value)
    if (kitAlimentacao >= metaKit) {
        pontos = pontos + 5000 
        if (kitAlimentacao > metaProva1){
            pontos = pontos + (kitAlimentacao - metaKit) * (5000/metaKit)
        }
    }
    else {
        pontos = pontos + kitAlimentacao * (5000 / metaKit)
    }
    let qtdeLatas = Number(document.getElementById("qtdeLatas").value)
    if (qtdeLatas >= metaSuplemento){
        pontos = pontos + 5000
        if (qtdeLatas > metaSuplemento){
            pontos = pontos + (qtdeLatas - metaSuplemento) * (5000/metaSuplemento)
        }
    }
    else  {
        pontos = pontos + (qtdeLatas * (5000/metaSuplemento))
    }
    let qtdeLeite = Number(document.getElementById("qtdeLeite").value)

    let qtdeDoacao = Number(document.getElementById("qtdeDoacao").value)
    
    document.getElementById("result").innerText = "Pontuação total: " + pontos.toFixed(2) + " pontos"
}