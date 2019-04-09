function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

const button = document.querySelector('button');

button.addEventListener('click',() => {
 const txt = 'lubie placki';
 document.getElementById('info').textContent = txt;
});