/*function operation(id, interes) {
  console.log(id)
  let resultado = id.value / parseInt(document.getElementById("form_People").value)
  let nuevoInteres = interes * resultado
  document.getElementById("monitor_Amount_Result").innerText = resultado.toFixed(2)
  document.getElementById("monitor_Total_Result").innerText = nuevoInteres.toFixed(2)
}*/

function calcform(formCalc) {
  //Primero comprobamos que se haya escrito al menos, un usuario
  let msg = document.getElementById("form_msg")
  msg.innerText = ""
  const usuario = document.calc_form.form_People.value
  if (usuario <= 0) {
    msg.innerText = "Usuarios Incorrecto"
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
  if (formCalc.querySelector("input[type='button']")) {
    console.log(document.querySelector('input[type="button"].btn_Tip_selected'))
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
  const tip = (facturar * valor) / usuario
  const total = facturar / usuario + tip
  document.getElementById("monitor_Amount_Result").innerText = tip.toFixed(2)
  document.getElementById("monitor_Total_Result").innerText = total.toFixed(2)
}
