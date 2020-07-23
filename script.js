//Función para determinar si una palabra es o no es palíndromo
function esPalindromo(palabra) {
    var inversa = "";
    inversa = palabra.split("").reverse().join("");
    //si es igual a la inversa, quiere decir que se lee igual al derecho y al revés
    if (palabra == inversa) {
        return true;
    } 
    else {
        return false;
    }
}

//Función prueba que utiliza la función auxiliar para determinar si es palíndromo o no
function prueba() {
    cadena = document.getElementsByName("cadena")[0].value;
    var variable;

    //Caso base: si la cadena es vacía entonces es palíndromo
    if (cadena == "") {
        variable = "El palíndromo más grande de la cadena es vacío.";
    }
    //Caso 1: si la cadena solo tiene 1 letra o 1 número, entonces es palíndromo y por tanto devuelve toda la palabra
    else if (cadena.length == 1) {
        variable = cadena;
    }
    //Caso 2: si toda la palabra es un palíndromo, entonces devuelvo toda la palabra
    else if (esPalindromo(cadena)) {
        variable = cadena;
    }
    else {
        //pruebita();
    }

    alert(variable);
}

function subPalin() {
    cadena = document.getElementsByName("cadena")[0].value; //Aquí guarda la cadena ingresada en el input del html
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
    //Mensaje de alerta que muestra el subpalindromo más largo:
    alert("El palíndromo más largo de la cadena es: "+variable);
}

/*Nota: al inicio estaba intentando realizar estas comparaciones con un array bidimensional y no funcionaba, porque
era muy complejo compararlos todos con todos, entonces por eso se utilizó un array bidimensional*/