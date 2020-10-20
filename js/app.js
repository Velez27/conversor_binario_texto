inputTextHuman = document.getElementById('text_human');
inputTextBinary = document.getElementById('text_binary');
buttonTranslate = document.getElementById('translate');

function translateToBinary(text){
    let potencyArray = [128, 64, 32, 16, 8, 4, 2, 1];
    let binaryResultArray = [];
    let asciiCodeArray = [];

    for(let i = 0; i < text.length; i++){
        let caracter = text[i];
        asciiCodeArray.push(caracter.charCodeAt());
    }
    
    for(let i = 0; i < asciiCodeArray.length; i++){
        let asciiCode = asciiCodeArray[i]; 
        for(let j = 0; j < potencyArray.length; j++){
                if(asciiCode >= potencyArray[j]){
                    binaryResultArray.push(1);
                    asciiCode = asciiCode - potencyArray[j];
                }else{
                    binaryResultArray.push(0);
                }
            
        }
        binaryResultArray.push(' ')
    }
    let result = binaryResultArray.toString();
    const regrex = /,/g;
    result = result.replace( regrex, '');
    return result;
}

function translateToText(binary){
    let potencyArray = [128, 64, 32, 16, 8, 4, 2, 1];
    let regrex = / /g;
    let reduceBinaryArray = binary.replace(regrex, '');
    let contador = 0;
    let textResultArray = [];
    let asciiCode = 0

    for(let i = 0; i < reduceBinaryArray.length; i++){
        if(reduceBinaryArray[i] == 1){
            asciiCode += potencyArray[contador];
        }
        if(contador == 7){
            contador = 0;
            textResultArray.push(asciiCode);
            asciiCode = 0;
            continue;
        }
        contador++
    }
    let result = '';
    for(let i = 0; i < textResultArray.length; i++){
        result += String.fromCharCode(textResultArray[i]);
    }
    return result;
}