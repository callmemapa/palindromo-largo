//Desarrollo de la función principal
function subPalin(cadena) {
    //Aquí guarda la cadena ingresada en el input del html
    cadena = document.getElementsByName("cadena")[0].value; //Comentar cuando se vayan a ejecutar las pruebas unitarias 
    let elemento = document.getElementById("mensaje");      //Obtengo el elemento donde voy a mostrar el mensaje
    var variable = "";                                      //Esta es la variable que almacenará el palíndromo
    var tamano = cadena.length;                             //El tamaño nos facilitará al momento de recorrer la cadena
    var max = 1, inicio = 0;                                //max es la longitud del palindromo más largo, inicio es donde empieza tal palindromo
    //Necesitamos una matriz, entonces primero creamos un array del tamaño de la cadena
    var arrayPalindromos = new Array(tamano);               
    //Y luego lo volvemos bidimensional, para comparar al estilo LCS (subsecuencia común más larga, tema visto en FADA)
    for (var i = 0; i < tamano; i++) {
        arrayPalindromos[i] = new Array(tamano);
    }
    //Llenamos en diagonal, porque al ser la misma palabra, las diagonales siempre coinciden
    for (var i = 0; i < tamano; i++) {
        arrayPalindromos[i][i] = true;
    }
    //Aquí lo que buscamos es comparar cada una de las letras con el resto de ellas,es decir: la primera con la segunda, la segunda con la tercera y así
    for (var i = 0; i < tamano; i++) {
        if (cadena.charAt(i) == cadena.charAt(i+1)) {
            /*Entonces si el caracter 1 es igual al siguiente, en esa posición particular se guardará un true
            Ejemplo: tengo aab, compara a con a, como son iguales, entonces guardo true en la posición horizontal de a 1 y el la vertical de a 2*/
            arrayPalindromos[i][i+1] = true;      
            //hasta aquí hemos comparado de a dos caracteres, por tanto el tamaño máximo de nuestra cadena será 2          
            max = 2;        
            //y el inicio de la subcadena será el caracter de comparación de la izquierda                                
            inicio = i;                                    
        }
    }
    //Aquí la comparación es con el resto de los caracteres, no solo con los dos consecutivos
    for (var j = 3; j <= tamano; j++) {
        for (var i = 0; i < tamano-j+1; i++) {      
            /*n es quien varía en los posibles caracteres que irían al final de la palabra
            inicia en 3 por defecto, ya que los dos primeros ya fueron comparados
            compara entonces al primero con el tercero, al primero con el cuarto y as*/
            var n = i+j-1;         
            //Aquí se valida si el caracter inicial es igual al posible "final"
            if (cadena.charAt(i) == cadena.charAt(n) && arrayPalindromos[i+1][n-1]) {
                arrayPalindromos[i][n] = true;
                /*aquí es donde se comienza a validar si la subpalabra es más larga que la última más larga
                de ser así, se reasigna un valor de tamaño de cadena máxima, y el caracter inicial sería el nuevo i
                ejemplo: aabbaa es mayor que aba, entonces 6 sería el nuevo tamaño y no 3*/
                if (j > max) {
                    inicio = i;
                    max = j;
                }
            }
        }
    }
    /*Aquí acumula los caracteres del palíndromo más largo, comenzando en la variable inicio que es el punto de partida de la palabra
    finalizando en la posición que hay de inicio a max
    es decir, supongamos que tenemos aabbax, entonces inicio es la segunda a, y se le suma 4, que sería el tamaño del palindromo más largo
    y estos caracteres los voy concatenando en variable*/
    for (var i = inicio; i < inicio+max; i++) {
        variable = variable + cadena.charAt(i);
    }
    
    //Aquí se muestra cuál es el palíndromo más largo
    elemento.innerHTML  = "El palíndromo más largo de la cadena es: " + variable; //Comentar cuando se vayan a ejecutar las pruebas unitarias
    return variable;
}

module.exports = subPalin;

/*Nota: al inicio estaba intentando realizar estas comparaciones con un array unidimensional y no funcionaba, porque
era muy complejo compararlos todos con todos, entonces por eso se utilizó una matriz*/
