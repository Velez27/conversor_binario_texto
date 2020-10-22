let inputTextHuman = document.getElementById('text_human');
let inputTextBinary = document.getElementById('text_binary');
let buttonTranslate = document.getElementById('translate');
let buttonCopyText = document.getElementById('copy_text');
let buttonCopyBinary = document.getElementById('copy_binary');
let buttonCleanText = document.getElementById('clean_text');
let buttonCleanBinary = document.getElementById('clean_binary');
let buttonPasteText = document.getElementById('paste_text');
let buttonPasteBinary = document.getElementById('paste_binary');

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

function copyText(aux){
    if (aux){
        inputTextHuman.select();
    }else{
        inputTextBinary.select();
    }
    try{
        document.execCommand('copy');
    }catch(err){
        console.error(err);
    }
}

function pasteText(aux){
    if (aux){
        inputTextHuman.value = '';
        navigator.clipboard.readText().then((text) =>{
            inputTextHuman.value = text;
        });
    }else{
        inputTextBinary.value = '';
        navigator.clipboard.readText().then((text) => {
            inputTextBinary.value = text;
        });
    }
}

buttonCopyText.addEventListener('click', () => {
    copyText(true);
});

buttonCopyBinary.addEventListener('click', () => {
    copyText(false);
});


buttonTranslate.addEventListener('click', () => {
    if(inputTextHuman.value){
        inputTextBinary.value = translateToBinary(inputTextHuman.value);
    }
    if(inputTextBinary.value){
        inputTextHuman.value = translateToText(inputTextBinary.value);
    }
});

buttonCleanText.addEventListener('click', () => {
    inputTextHuman.value = '';
});

buttonCleanBinary.addEventListener('click', () => {
    inputTextBinary.value = '';
});

buttonPasteText.addEventListener('click', () => {
    pasteText(true);
});

buttonPasteBinary.addEventListener('click', () => {
    pasteText(false);
});