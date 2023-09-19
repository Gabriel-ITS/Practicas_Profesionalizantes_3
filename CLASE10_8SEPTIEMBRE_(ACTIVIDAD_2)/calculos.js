function calcular()
{
    //obtengo los elementos html por ID. Y posteriormente recolecto los valores de cada INPUT obtenido
    const d1 = 2900000
    const d2 = 3350000
    const d3 = 3960000

    //obtengo el select por ID. Y posteriormente recolecto el valor seleccionado
    const operacion = document.getElementById("slt_operacion").value

    //declaro una variable para utilizar posteriormente dentro de las condicionales
    let resultado = null;

    if (operacion == 0) {
        //debo calcular corriente en el caso de que la operacion sea igual a 0(cero)
        resultado = d1-d1 * 0.05
    }else{
        if(operacion == 1){
            //debo calcular tensión en el caso de que la operacion sea igual a 1(uno)
            resultado = d2-d2 * 0.1
        }else{
            //debo calcular resistnecia en el caso de que la operacion sea igual a 2(dos)
            resultado = d3-d3 * 0.15
        }
    }

    //obtenego y encuentro al elemento <h2> y posteriormente lo llenamos con el resultado obtenido
    //Es decir le asignamos un string o texto al elemento <h2>
    document.getElementById("h_resultado").textContent = 'Precio final promocion c/ descuento = $'+resultado.toFixed(2)
}