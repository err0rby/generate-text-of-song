function generateSingleStanza (number) {
    let end = number % 10;
    if (end == 1) {
        return `${number} бутылка`
    }else if (end > 1 && end <= 4 && !(number >= 12 && number <= 14)) {
        return `${number} бутылки`
    }else {
        return `${number} бутылок`
    } 
}
function song () {
    console.log (`${generateSingleStanza(number)} пива на стене`)
    console.log (`${generateSingleStanza(number)} пива!`)
    console.log ("Возьми одну пусти по кругу")
    if (number == 1) {
        console.log("Нет бутылок пива на стене")
    }else {
        console.log(`${generateSingleStanza(number - 1)} пива на стене \n`)
    }
}
function generateSongText () {
    for (number = 99; number > 0; number--) {
        song();
    }
}
generateSongText();