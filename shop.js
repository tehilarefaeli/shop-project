function loadProducts(){
  debugger;
  for(var i=0; i<3; i++){
        const node = document.getElementById("card");
        const clone = node.cloneNode(true);
        document.body.appendChild(clone);
    }
}