// variáveis globais
let prato = " sem prato principal,";
let bebida = " sem bebida,";
let sobremesa = " e sem sobremesa.";

//primeiro seu prato
function selectFrango() {
  if (prato === " sem prato principal," || prato === " Carne,") {
    document.getElementById("frango").style.borderColor = "#00FF7F";
    document.getElementById("carne").style.borderColor = "white";
    prato = " Frango,";
  } else {
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("carne").style.borderColor = "white";
    prato = " sem prato principal,";
  }
}
function selectCarne() {
  if (prato === " sem prato principal," || prato === " Frango,") {
    document.getElementById("carne").style.borderColor = "#00FF7F";
    document.getElementById("frango").style.borderColor = "white";
    prato = " Carne,";
  } else {
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("carne").style.borderColor = "white";
    prato = " sem prato principal,";
  }
}
//agora uma bebida

function selectCoca() {
    if (bebida === " sem bebida," || bebida === " Refresco,") {
      document.getElementById("coca").style.borderColor = "#00FF7F";
      document.getElementById("refresco").style.borderColor = "white";
      bebida = " Coca,";
    } else {
      document.getElementById("coca").style.borderColor = "white";
      document.getElementById("refresco").style.borderColor = "white";
      bebida = " sem bebida,";
    }
  }
  function selectRefresco() {
    if (bebida === " sem bebida," || bebida === " Coca,") {
      document.getElementById("refresco").style.borderColor = "#00FF7F";
      document.getElementById("coca").style.borderColor = "white";
      bebida = " Refresco,";
    } else {
      document.getElementById("refresco").style.borderColor = "white";
      document.getElementById("coca").style.borderColor = "white";
      bebida = " sem bebida,";
    }
  }
//sobremesa
function selectPudim() {
    if (sobremesa === " e sem sobremesa." || sobremesa === " Sorvete,") {
      document.getElementById("pudim").style.borderColor = "#00FF7F";
      document.getElementById("sorvete").style.borderColor = "white";
      sobremesa = " Pudim,";
    } else {
      document.getElementById("pudim").style.borderColor = "white";
      document.getElementById("sorvete").style.borderColor = "white";
      sobremesa = " e sem sobremesa."
    }
  }
  function selectSorvete() {
    if (sobremesa === " e sem sobremesa." || sobremesa === " Pudim,") {
      document.getElementById("sorvete").style.borderColor = "#00FF7F";
      document.getElementById("pudim").style.borderColor = "white";
      sobremesa = " Sorvete,";
    } else {
      document.getElementById("sorvete").style.borderColor = "white";
      document.getElementById("pudim").style.borderColor = "white";
      sobremesa = " e sem sobremesa."
  }
}

function finalizarPedido() {
  let mensagem;

  mensagem =
    "olá! gostaria de pedir um combo com: " + prato + bebida + sobremesa + "!";

  if (
    prato === " sem prato principal," &&
    bebida === " sem bebida," &&
    sobremesa === " e sem sobremesa."
  ) {
    alert("Pedido não selecionado!");
  } else {
    //alert(mensagem);
    window.open("http://wa.me/+5581984103451?text=" + mensagem);
  }
}
