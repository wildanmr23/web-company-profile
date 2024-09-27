function sendToWhatsApp() {
  // Ambil data dari form
  var ownerName = document.getElementById("ownerName").value;
  var productDescription = document.getElementById("productDescription").value;
  var productSpecification = document.getElementById(
    "productSpecification"
  ).value;

  // Cek apakah semua field telah diisi
  if (
    ownerName === "" ||
    productDescription === "" ||
    productSpecification === ""
  ) {
    alert("Harap mengisi semua field.");
    return;
  }

  // Format pesan untuk WhatsApp
  var message = `Hallo saya ingin menjual property saya di website ini. Berikut saya cantumkan informasi terait properti. Nama Pemilik ${ownerName} Deskripsi Properti : ${productDescription} Spesifikasi Properti : ${productDescription} `;

  // Nomor WhatsApp yang akan menerima pesan (ganti dengan nomor yang diinginkan)
  var phoneNumber = "6282127312767"; // Ganti dengan nomor WhatsApp Anda

  // Buat link WhatsApp
  var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + message;

  // Redirect ke WhatsApp
  window.open(whatsappURL, "_blank");
}
