function operation(id, interes) {
  let resultado = id.value / parseInt(document.getElementById("form_People").value)
  let nuevoInteres = interes * resultado
  document.getElementById("monitor_Amount_Result").innerText = resultado.toFixed(2)
  document.getElementById("monitor_Total_Result").innerText = nuevoInteres.toFixed(2)
}
