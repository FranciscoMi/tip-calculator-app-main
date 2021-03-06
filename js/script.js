function restablecer() {
  document.getElementById("monitor_Amount_Result").innerText = "0.00"
  document.getElementById("monitor_Total_Result").innerText = "0.00"
}

function calcform(formCalc) {
  //Primero borramos todos los mensajes
  let msg = document.querySelectorAll(".form_msg")
  msg.forEach((clase) => {
    clase.innerText = ""
  })
  //Comprobamos que se haya escrito al menos, un usuario
  msg = document.getElementById("form_msg_user")
  const usuario = document.calc_form.form_People.value
  if (usuario <= 0) {
    msg.innerText = "Falta Nº Usuarios"
    return 0
  }

  //Luego comprobamos que se haya metido un valor en el campo Facturar
  msg = document.getElementById("form_msg_bill")
  const campoFacturar = parseFloat(document.calc_form.form_bill.value)
  if (isNaN(campoFacturar)) {
    msg.innerText = "Falta valor a facturar"
    return 0
  }

  //Recogemos los datos que forman parte del campo Facturar según el Tipo seleccionado
  msg = document.getElementById("form_msg_Tip")
  let input_txt = formCalc.name
  let valor
  switch (input_txt) {
    case "tip":
      //Reestablecemos los colores del grupo de botones y cambiamos el seleccionado
      if (document.querySelector("input.btn_Tip_selected")) {
        document.querySelector("input.btn_Tip_selected").className = "btn_Tip"
      }
      if (formCalc.type === "button") {
        formCalc.className = "btn_Tip_selected"
        document.getElementById("form_custom").value = ""
      }
      //Sacamos el valor del tipo de interés acorde al botón pulsado
      valor = parseInt(formCalc.value)
      if (isNaN(valor)) {
        msg.innerText = "Valor no entero"
        return 0
      } else if (valor < 0 || valor > 100) {
        msg.innerText = "Valores (0 - 100)"
        return 0
      }
      break
    case "form_bill":
    case "form_People":
      let collection = document.getElementsByClassName("btn_Tip_selected")
      console.log(collection)
      if (collection.length != 0) {
        valor = parseInt(collection.item(0).value)
      } else if (document.getElementById("form_custom").value != "") {
        valor = parseInt(document.getElementById("form_custom").value)
      } else {
        valor = 0
      }
  } //fin switch
  valor *= 0.01
  showValue(valor, usuario)
}

function showValue(valor, usuario) {
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

  //Sacamos el resultado
  document.getElementById("monitor_Amount_Result").innerText = parseFloat(tipString).toFixed(2)
  document.getElementById("monitor_Total_Result").innerText = total.toFixed(2)
}
