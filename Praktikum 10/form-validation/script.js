const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const jam = document.getElementById('jam');
const tujuan = document.getElementById('tujuan');
const tiket = document.getElementById('tiket');



const beli = (forms) => {
    const pelangganValue = username.value.trim();
    const emailValue = email.value.trim();
    const jamValue = jam.value.trim();
    const tujuanValue = tujuan.value.trim();
    const tiketValue = tiket.value.trim();
    console.log(tiketValue);

    document.getElementById('hasil-username').value = pelangganValue;
    document.getElementById('hasil-email').value = emailValue;
    document.getElementById('hasil-jam').value = jamValue;
    document.getElementById('hasil-tujuan').value = tujuanValue;
    document.getElementById('hasil-tiket').value = tiketValue;

    alert('Thank you for registering this form')

    document.getElementById("hasil").style.display = "block";
    return false;
};