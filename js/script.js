function restablecer() {
  document.getElementById("monitor_Amount_Result").innerText = "0.00"
  document.getElementById("monitor_Total_Result").innerText = "0.00"
}

function calcform(formCalc) {
  //Primero comprobamos que se haya escrito al menos, un usuario
  let msg = document.getElementById("form_msg")
  msg.innerText = ""
  const usuario = document.calc_form.form_People.value
  if (usuario <= 0) {
    msg.innerText = "Usuarios Incorrecto"
    return 0
  }

  //Luego comprobamos que se haya metido un valor en el campo Facturar
  const campoFacturar = parseFloat(document.calc_form.form_bill.value)
  if (isNaN(campoFacturar)) {
    msg.innerText = "Falta valor a facturar"
    return 0
  }

  //Recogemos los datos que forman parte del fieldset
  let valor = parseInt(formCalc.value)
  if (isNaN(valor) || valor < 0 || valor > 100) {
    msg.innerText = "Valores entre 0 y 100"
    return 0
  }
  valor *= 0.01
  //Reestablecemos los colores del grupo de botones y cambiamos el seleccionado
  if (formCalc.type === "button") {
    if (document.querySelector("input.btn_Tip_selected")) {
      document.querySelector("input.btn_Tip_selected").className = "btn_Tip"
    }
    formCalc.className = "btn_Tip_selected"
  }

  //Calculamos el tipo de Interés/persona
  const facturar = parseFloat(calc_form.form_bill.value)
  if (isNaN(facturar)) {
    msg.innerText = " Facturación incorrecta"
  }
  //Sacamos el tipo de interes
  let tip = (facturar * valor) / usuario
  //Truncamos el tipo de interés a 2 decimales utilizando expresiones regulares
  const regex = /^\d+(\.\d{0,2})?/
  let tipString = tip.toString().match(regex)[0]
  const total = facturar / usuario + tip
  document.getElementById("monitor_Amount_Result").innerText = parseFloat(tipString).toFixed(2)
  document.getElementById("monitor_Total_Result").innerText = total.toFixed(2)
}
