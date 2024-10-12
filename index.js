<script>
// Menangani event submit form
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form untuk reload halaman

    // Ambil nilai username dan password dari form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simpan username dan password ke localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Opsional: Alert untuk memberitahu bahwa data sudah disimpan
    alert('Data login tersimpan di localStorage!');

    // Lanjutkan dengan logika login atau redirect ke halaman lain
    // window.location.href = "dashboard.html";
});
</script>
