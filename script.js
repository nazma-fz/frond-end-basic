function tekan() {
    if (confirm("anda yakin untuk melanjutkan")==true) {
        alert("anda tidak diperkenankan melanjutkan")
    } else {
        alert("yahaha wahyou")
    }
}

function belum() {
    alert("Halaman Belum Dibuat")
}

function darkMode() {
        let element = document.body;
        element.classList.toggle("dark-mode")
}