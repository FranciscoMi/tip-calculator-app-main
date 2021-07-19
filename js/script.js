/*function operation(id, interes) {
  console.log(id)
  let resultado = id.value / parseInt(document.getElementById("form_People").value)
  let nuevoInteres = interes * resultado
  document.getElementById("monitor_Amount_Result").innerText = resultado.toFixed(2)
  document.getElementById("monitor_Total_Result").innerText = nuevoInteres.toFixed(2)
}*/

function calcform(formCalc) {
  //Primero comprobamos que se haya escrito al menos, un usuario
  console.log(formCalc)
  let msg = document.getElementById("form_msg")
  msg.innerText = ""
  const usuario = parseInt(document.calc_form.form_People.value)
  if (!usuario > 0) {
    msg.innerText = "No pueden ser 0"
    return 0
  }
  //Luego comprobamos si los datos forman parte de un cuadro de texto o de un botón
  let valor = parseInt(formCalc.value)
  if (isNaN(valor) || valor < 0 || valor > 100) {
    msg.innerText = "Valores entre 0 y 100"
    return 0
  }
  console.log(valor)
}
