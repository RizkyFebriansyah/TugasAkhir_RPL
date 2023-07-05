// mengambil elemen dari halaman HTML
const nama = document.getElementById('nama');
const email = document.getElementById('email');
const tanggal = document.getElementById('tanggal');
const lapangan = document.getElementById('lapangan');
const durasi = document.getElementById('durasi');
const submitBtn = document.getElementById('submitBtn');

// membuat event listener untuk tombol submit
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // mengambil nilai dari elemen form
  const namaValue = nama.value.trim();
  const emailValue = email.value.trim();
  const tanggalValue = tanggal.value.trim();
  const lapanganValue = lapangan.value.trim();
  const durasiValue = durasi.value.trim();

  // melakukan validasi form
  if (namaValue === '') {
    setError(nama, 'Nama tidak boleh kosong');
  } else {
    setSuccess(nama);
  }

  if (emailValue === '') {
    setError(email, 'Email tidak boleh kosong');
  } else if (!isEmail(emailValue)) {
    setError(email, 'Email tidak valid');
  } else {
    setSuccess(email);
  }

  if (tanggalValue === '') {
    setError(tanggal, 'Tanggal tidak boleh kosong');
  } else {
    setSuccess(tanggal);
  }

  if (lapanganValue === '') {
    setError(lapangan, 'Lapangan tidak boleh kosong');
  } else {
    setSuccess(lapangan);
  }

  if (durasiValue === '') {
    setError(durasi, 'Durasi tidak boleh kosong');
  } else {
    setSuccess(durasi);
  }
});

// fungsi untuk menampilkan pesan error pada form
function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

// fungsi untuk menampilkan pesan sukses pada form
function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// fungsi untuk memeriksa apakah nilai email yang dimasukkan valid atau tidak
function isEmail(email) {
  const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return re.test(email);
}
