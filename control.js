var getData = function(){
    var usuario = document.getElementById ("usuario").value;
    var clave = document.getElementById ("clave").value;
    expresion = /\w+@\w+\.+[a-z]/;
    if (!expresion.test(usuario)) {
        document.getElementById ("usuario").focus();
        alert ("El correo no es valido");
    } else {
        if (clave == ""  ){
        document.getElementById ("clave").focus();   
        alert ("Debe ingresar la clave");
    }
        else {

         console.log (usuario +" "+ clave);
        }  


}
}




 
