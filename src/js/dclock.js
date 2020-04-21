function get_hora() {
	var date = new Date();
	var h = date.getHours();
	h = h < 10 ? "0" + h + ":" : h + ":";

	document.getElementById("hora").innerText = h;
	document.getElementById("hora").textContent = h;

	setTimeout(get_hora, 1000);
}

function get_minutos() {
	var date = new Date();
	var m = date.getMinutes();
	m = m < 10 ? "0" + m + ":" : m + ":";

	document.getElementById("minutos").innerText = m;
	document.getElementById("minutos").textContent = m;
	setTimeout(get_minutos, 1000);
}

function get_segundos() {
	var date = new Date();
	var s = date.getSeconds();
	s = s < 10 ? "0" + s : s;

	document.getElementById("segundos").innerText = s;
	document.getElementById("segundos").textContent = s;
	setTimeout(get_segundos, 1000);
}

get_hora();
get_minutos();
get_segundos();
