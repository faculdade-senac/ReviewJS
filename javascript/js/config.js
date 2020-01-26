function setConfig(){
    let texts = {
        "title":"Boteco do Gladimir - Lista de Compras"

    };

    document.title = texts.title;
    document.getElementById("navTitle").innerHTML = texts.title;   
}
setConfig();