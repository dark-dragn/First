
async function fun(){
const response= await fetch('https://dummyjson.com/products')
 const data =await response.json()
 console.log(data.products)
 var tab=document.getElementById("myTable")

 for(let i=0;i<5;i++){
    const product=data.products[i];
    var row = tab.insertRow(i);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3=row.insertCell(2);
  cell1.innerHTML = product.id;
  cell2.innerHTML = product.brand;
  cell3.innerHTML = product.price;

 }
  
}
fun()
