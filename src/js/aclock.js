aclock();

function aclock() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  h = (h + 11) % 12 + 1;

  var h_grados = h * 30;
  var m_grados = m * 6;
  var s_grados = s * 6;

  document.querySelector('.hora').style.transform = `rotate(${h_grados}deg)`
  document.querySelector('.minutos').style.transform = `rotate(${m_grados}deg)`
  document.querySelector('.segundos').style.transform = `rotate(${s_grados}deg)`
}

setInterval(aclock, 1000);