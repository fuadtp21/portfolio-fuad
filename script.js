// Animasi sederhana saat halaman selesai dimuat
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Efek saat tombol diklik
const tombol = document.querySelectorAll(".btn a");

tombol.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.95)";

        setTimeout(() => {
            btn.style.transform = "scale(1)";
        },150);
    });
});