La aplicacion intento ser un boton de panico, con campos de texto que permiten ingresar el nombre y apellido de la persona, mas los numeros a los que quiera enviarles el mensaje automaticamente. 

Use twilio para poder enviar los mensajes, mas pwa para tomar geolocalizacion, y poder instalar la aplicacion en telefonos. Ademas esta optimizada mas para movil que para escritorio, el menu que nos permite ingresr los datos aparece cuando la pantalla esta en tamaño telefono. 

Sin embargo el fetch no funciono asi que no pude enviar los datos, aun asi el codigo del back funciona, y al correrlo envia los mensajes (importante, al funcionar con twilio y esta ser una API gratis hay que armar un "sandbox" que nos permite agregar manualmente a los usuarios interesados al sandbox).

El mensaje consiste del nombre del usuario, su numero de telefono, un texto que dice que se encuentra en panico, y su ubicacion.

Para correr el front usar 
npm i 
Para instalar todas las dependencias, y despues 
npm p.
Npm p es un script custom que corre el build, y al terminar corre el serve

Ademas la pagina esta deployeada en cloudflare => https://ayifrontdeployer.pages.dev/
La cual esta al dia con el repositorio, en un futuro la idea era hacer que el token generado se autoagregara a la cloud de Firebase para poder enviar push notifications personalizadas. 
