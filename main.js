

function snapCrackle(maxValue) {
    
    let itens = []
    
    for(let n = 1; n < maxValue; n++) {


    if ((n % 2 !== 0) && (n % 5 === 0)) {
        itens.push('SnapCrackle')
}

    else if (n % 2 !== 0) {
        itens.push('Snap')
}

    else if (n % 5 === 0) {
        itens.push('Crackle')
}

    else {
        itens.push(n)
}


} 


return itens.join(', ') 

}



snapCrackle(30)







// fazer um loop de 1 a maxValue.length
// numero impar imprimir snap
// multiplo de 5 imprimir crackle
// se for impar e multiplo de 5 imprimir snapcrackle
// se o numero for par e não multiplo de 5 imprimir o proprio numero 
// itens separados por vigula e espaço