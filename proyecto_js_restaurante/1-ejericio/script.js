case 1 :
  function mostrar(x)
  {
  if (x < 200)
  return "no tiene ningun descuento";
  else
  if (x >200 && x<400)
  return "tiene un descuento de 30%"+''+' :'+ x * 0.30;
  else 
  if(x >400)
  return "tiene un descuento de 40%" +''+' :'+x * 0.40;
  }
  
  var venta;
  venta=prompt("Ingrese una venta entre","");
  venta=parseInt(venta);
  var r;
  r=mostrar(venta);
  document.write(r);
  break;