function calcular()
{
    const d1 = document.getElementById("inp_dato1").value
    const d2 = document.getElementById("inp_dato2").value

    const operacion = document.getElementById("slt_operacion").value

    let resultado = null;

    if (operacion == 0) {
        resultado = d1/d2
    }else{
        if(operacion == 1){
            resultado = d1 * d2
        }else{
            resultado = d1/d2
        }
    }

    document.getElementById("h_resultado").textContent = 'Resultado = '+resultado.toFixed(2)
}


function setearLabel()
{
   const operacion =  document.getElementById("slt_operacion").value

   const lbl1 = document.getElementById("lbl_dato1")
   const lbl2 = document.getElementById("lbl_dato2")

   if(operacion == 0)
   {
       
       lbl1.textContent = 'Tensión'
       lbl2.textContent = 'Resistencia'
   }else{
       if(operacion == 1){
           lbl1.textContent = 'Corriente'
           lbl2.textContent = 'Resistencia'
       }else{
           lbl1.textContent = 'Tensión'
           lbl2.textContent = 'Corriente'
       }
   }
}