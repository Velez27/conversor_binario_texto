inputTextHuman = document.getElementById('text_human');
inputTextBinary = document.getElementById('text_binary');
buttonTranslate = document.getElementById('translate');

function translateToBinary(text){
    asciiCodeArray = [];

    for(let i = 0; i < text.length; i++){
        let caracter = text[i];
        asciiCodeArray.push(caracter.charCodeAt());
    }
    console.log(asciiCodeArray)
    binaryCodeArray = [];
    potencyArray = [128, 64, 32, 16, 8, 4, 2, 1];
    binaryResultArray = [];
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

function translateToText(){
    
}