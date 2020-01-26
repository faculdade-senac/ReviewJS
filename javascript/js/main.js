let carrinho = [
    {"name":"Quaker", "amount":12, "price":7.50},
    {"name":"Kolynos", "amount":7, "price":4},
    {"name":"Neutrox", "amount":21, "price":9.00},
    {"name":"Porta-discos", "amount":15, "price":120.00},
    {"name":"Monareta", "amount":2, "price":300.00}
];

let selectedId = 0;

function getAll(carrinho){
    if(carrinho.length == 0){
        document.getElementById('all_items').style.display = "none";
        document.getElementById('total').style.display = "none";
        getTotal();
    }else{
        document.getElementById('all_items').style.display = "table";
        document.getElementById('total').style.display = "table";
    let value = "";
    let cont = 0;
    value +='<thead><tr><th scope="col">Nome</th><th scope="col">Quantidade</th><th scope="col">Valor</th><th scope="col">Ações</th></tr></thead><tbody>';
    carrinho.forEach(element => {
        //console.log(element)
        value +='<tr><td>'+formatName(element.name)+'</td><td>'+formatAmount(element.amount)+'</td><td>'+formatValue(element.price)+'</td><td><button onclick="editProduct('+cont+');" class="btn btn-default"> Editar </button> | <button onclick=removeProduct('+cont+'); class="btn btn-default"> Remover </button></td></tr>';
        cont++;
    });
    value+='</tbody>';
    //console.log(value);
    
        document.getElementById("all_items").innerHTML = value;
        document.getElementById("total").innerHTML = "<h1>TOTAL: "+formatValue(getTotal())+"</h1>";
    }
}

function formatName(name){
    let str = name.toLowerCase();
    str = str.charAt(0).toUpperCase()+str.slice(1);

    return str;
}

function addData(){    
if(!validation()){
    return;
}
    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;
    let price = document.getElementById("price").value;
    //carrinho.unshift({"name":"massa", "amount":21, "price":9.00});
    
    carrinho.unshift({"name":name, "amount":amount, "price":price});
    
    getAll(carrinho);

}
function removeAll(){
    if(confirm("Excluir TODA a sua lista de compras?")){
        carrinho = [];
        getAll(carrinho);
    }
}

function formatValue(number){
    let value = "R$ "+(parseFloat(number).toFixed(2)+"").replace('.',',');
    return value;
}

function formatAmount(amount){
   
    return parseInt(amount);
}

function validation(){
    let name = document.getElementById('name').value;
    let amount = document.getElementById('amount').value;
    let price = document.getElementById('price').value;

    let errors = "";
    if(name === ""){
        errors += '<p>Preencha o nome</p>';
    }
    
    if(amount === ""){
        errors += "<p>Preencha a quantidade</p>"
    }
    else if(amount != parseInt(amount)){
        errors += '<p>Preencha a quantidade corretamente</p>';
    }
    if(price === ""){
        errors += '<p>Preencha a preço de venda</p>';
    } else if(price != parseFloat(price)){
        errors += '<p>Preencha o preço de venda corretamente</p>';
    }
    if(errors != ""){
        document.getElementById("errors").innerHTML = "<h3> ERRO(S) </h3>"+errors;
        document.getElementById("errors").style.display = 'grid';
        return 0;
    }else{
        return 1;
    }

    
  
}

function editProduct(product){
    let obj = carrinho[product];
    selectedId = product;
    document.getElementById("name").value = obj.name;
    document.getElementById("amount").value = obj.amount;
    document.getElementById("price").value = obj.price;
    document.getElementById('btnUpdate').style.display = 'inline-block';
    document.getElementById('spanInsert').style.display = 'none';

    document.getElementById('inputIDUpdate').innerHTML = '<input id="idUpdate" type="hidden" value='+product+'>';
}

function resetForm(){
    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("price").value = "";
    document.getElementById('spanInsert').style.display = 'inline-block';
    document.getElementById('btnUpdate').style.display = 'none';

    document.getElementById('inputIDUpdate').innerHTML = "";
}

function updateData(){
    if(!validation()){
        return;
    }
    let id = selectedId;
    console.log(id);
    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;
    let price = document.getElementById("price").value;

    carrinho[id] = {"name":name, "amount":amount, "price":price}
    getAll(carrinho);
}

function removeProduct(id){
    if(confirm("Realmente deseja remover este item?")){
        if(id === carrinho.length-1){
            carrinho.pop();
            
        }else if(id === 0){
            carrinho.shift();
        }else{
            let auxParte1 = carrinho.slice(0,id);
            let auxParte2 = carrinho.slice(id+1)
            carrinho = auxParte1.concat(auxParte2);

        }
        resetForm();
        getAll(carrinho);

    }
}

function getTotal(){
    let sum = 0;
    carrinho.forEach(element => {
        sum += element.price * element.amount;
    });
    return sum;
}

getAll(carrinho);