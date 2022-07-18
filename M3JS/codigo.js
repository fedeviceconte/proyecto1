var nombre = prompt ('Hola, cual es tu nombre?')
alert('Bienvenido ' +  nombre + ' '  +  'preciona aceptar para ver el transporte adecuado dependiendo la distancia que planeas recorrer' )

var transporte = prompt ('Pon el numero de metros que deseas viajar (solo usar numeros,sin signos)')
if(transporte <=1000) {
    alert("Tu transporte adecuado es pie");
 }

 else if(transporte <=10000) {
     alert("Tu transporte adecuado es bicicleta");
  }
 
  else if(transporte<=30000) {
     alert("Tu transporte adecuado es colectivo");
  }
 
  else if(transporte<=1000000) {
     alert("Tu transporte adecuado es auto");
  }
 
  else if(transporte >=1000000) {
     alert("Tu transporte adecuado es avion");
  }


