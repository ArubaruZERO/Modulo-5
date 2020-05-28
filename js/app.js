const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: true
    }
   ];


//  EJERCICIO -1-  Mostrar carrito de compra 

  for ( i=0; i<carrito.length; i++){
      console.log("-------Producto--"+":"+i)
      imprimir(carrito[i])
   }

  function imprimir(producto){
     console.log("id:"+producto.id)
     console.log("name:"+producto.name)
     console.log("price:"+producto.price)
     console.log("count:"+producto.count)
     console.log("premium:"+producto.premium)
  }


//  EJERCICIO -2-  Eliminar producto con  id: 54657

   elementoEliminado = () => carrito.splice(i,1);

   for (i=0; i<carrito.length;i++){
      if(carrito[i].id == 54657 ) {
         console.log("el elemento eliminado estaba en la posicion"+ ":"+ i )
         elementoEliminado()
      }

   }




//  EJERCICIO -3-  Total del carrito de compra

   var total = 0
   for (i=0;i<carrito.length;i++){
       total = total + (carrito[i].price * carrito[i].count); 
   }

   console.log(total);



//  EJERCICIO -4-  Filtrar los productos que sean prime

  for(i=0;i<carrito.length;i++){
      console.log("elemento"+i)
       if (carrito[i].premium === true){
           console.log("este elemento es premium")
      }else{
         console.log("no es prime")
      }
  }

//  EJERCICIO -5-  Si todos los productos son prime mensaje "Pedido sin gastos" 
//  si no "Pedido con gastos"



for (i=0;i<carrito.length;i++){ 
 if (carrito[0].premium == true && carrito[1].premium == true && carrito[2].premium == true 
    && carrito[3].premium == true && carrito[3].premium == true)
    {    console.log("No tienes que pagar gastos de envio");
 } else {
     console.log("Tienes de pagar gastos de envio ")
 }
}

//  EJERCICIO -6- Aplicar descuento del 5% si la compra es mayor a 50$

let total = 0

  for (i=0;i<carrito.length; i++){
    
    total= total + (carrito[i].price*carrito[i].count);
  
  }
  console.log("Precio total de la compra"+ ":" + total + "$")

  if (total > 50 ){
     console.log("-----Tu compra supera los 100$ asi que le aplicamos un 5%-------");
      descuento = total - (total*0.05);
     console.log("Precio final"+ ":"+ descuento + "$");
   }else{
      console.log("la compra no supera los 100$ asi que no tiene descuento");
   }


