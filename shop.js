function init(){
    const tt=document.getElementsByClassName("card");
   for( i=0 ; i<9 ;i++ ){
    document.appendChild(tt)
   }
}
function loadProducts(){
  debugger;
  for(var i=0; i<=3; i++){
    // var p=document.getElementsByClassName("card");
    // document.body.append(p);
    const node = document.getElementById("card").lastChild;
   const clone = node.cloneNode(true);

   document.body.append(clone);
    // 
    // body.appendChild(p);
    // divsOfProducts.innerHTML+=document.getElementById("card");
   // document.getElementById("divsOfProducts").innerHTML+=document.getElementById("card")
    //  body.innerHTML+=document.getElementById("divsOfProducts").innerHTML+=document.getElementById("card");
  }
}