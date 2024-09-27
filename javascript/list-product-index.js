// Data Produk dengan spesifikasi, lokasi, dan gambar
const products = [
  {
    id: 1,
    title: "Rumah Mewah di Jakarta",
    description:
      "Rumah mewah dengan 4 kamar tidur, 3 kamar mandi, dan taman luas.",
    price: "Rp 3.000.000.000",
    location: "Jakarta Selatan, DKI Jakarta",
    specifications: [
      "4 Kamar Tidur",
      "3 Kamar Mandi",
      "Kolam Renang Pribadi",
      "Garasi 2 Mobil",
    ],
    images: [
      "https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://via.placeholder.com/600x400?text=Rumah+Mewah+2",
      "https://via.placeholder.com/600x400?text=Rumah+Mewah+3",
    ],
    whatsapp: "6282127312767",
  },
  {
    id: 2,
    title: "Apartemen Modern di Bandung",
    description: "Apartemen dengan fasilitas lengkap dan view pegunungan.",
    price: "Rp 1.200.000.000",
    location: "Bandung, Jawa Barat",
    specifications: [
      "2 Kamar Tidur",
      "1 Kamar Mandi",
      "Gym dan Kolam Renang",
      "Parkir 1 Mobil",
    ],
    images: [
      "https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://via.placeholder.com/600x400?text=Apartemen+2",
      "https://via.placeholder.com/600x400?text=Apartemen+3",
    ],
    whatsapp: "6289876543210",
  },
  {
    id: 3,
    title: "Villa di Bali",
    description: "Villa dengan pemandangan pantai dan private pool.",
    price: "Rp 5.500.000.000",
    location: "Kuta, Bali",
    specifications: [
      "3 Kamar Tidur",
      "3 Kamar Mandi",
      "Private Pool",
      "Dekat Pantai",
    ],
    images: [
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://via.placeholder.com/600x400?text=Villa+2",
      "https://via.placeholder.com/600x400?text=Villa+3",
    ],
    whatsapp: "6285678901234",
  },
  {
    id: 4,
    title: "Rumah Mewah di Jakarta",
    description:
      "Rumah mewah dengan 4 kamar tidur, 3 kamar mandi, dan taman luas.",
    price: "Rp 3.000.000.000",
    location: "Jakarta Selatan, DKI Jakarta",
    specifications: [
      "4 Kamar Tidur",
      "3 Kamar Mandi",
      "Kolam Renang Pribadi",
      "Garasi 2 Mobil",
    ],
    images: [
      "https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://via.placeholder.com/600x400?text=Rumah+Mewah+2",
      "https://via.placeholder.com/600x400?text=Rumah+Mewah+3",
    ],
    whatsapp: "6282127312767",
  },
  {
    id: 5,
    title: "Apartemen Modern di Bandung",
    description: "Apartemen dengan fasilitas lengkap dan view pegunungan.",
    price: "Rp 1.200.000.000",
    location: "Bandung, Jawa Barat",
    specifications: [
      "2 Kamar Tidur",
      "1 Kamar Mandi",
      "Gym dan Kolam Renang",
      "Parkir 1 Mobil",
    ],
    images: [
      "https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://via.placeholder.com/600x400?text=Apartemen+2",
      "https://via.placeholder.com/600x400?text=Apartemen+3",
    ],
    whatsapp: "6289876543210",
  },
  {
    id: 6,
    title: "Villa di Bali",
    description: "Villa dengan pemandangan pantai dan private pool.",
    price: "Rp 5.500.000.000",
    location: "Kuta, Bali",
    specifications: [
      "3 Kamar Tidur",
      "3 Kamar Mandi",
      "Private Pool",
      "Dekat Pantai",
    ],
    images: [
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://via.placeholder.com/600x400?text=Villa+2",
      "https://via.placeholder.com/600x400?text=Villa+3",
    ],
    whatsapp: "6285678901234",
  },
];

// Menampilkan List Produk
const productList = document.getElementById("productList");
products.forEach((product) => {
  const productItem = document.createElement("div");
  productItem.className = "col";
  productItem.innerHTML = `
          <div class="card h-100 product-item" onclick="showDetails(${product.id})">
              <img src="${product.images[0]}" class="card-img-top" alt="${product.title}">
              <div class="card-body">
                  <h5 class="card-title">${product.title}</h5>
                  <p class="text-success fw-bold"><i class="fas fa-tags"></i> ${product.price}</p>
                  <p class="card-text text-muted"><i class="fas fa-map-marker-alt"></i> ${product.location}</p>
              </div>
          </div>
      `;
  productList.appendChild(productItem);
});

// Fungsi untuk Menampilkan Detail Produk
function showDetails(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    document.getElementById("detailTitle").innerText = product.title;
    document.getElementById("detailDescription").innerText =
      product.description;
    document.getElementById("detailPrice").innerText = product.price;
    document.getElementById("detailLocation").innerText = product.location;

    // Menampilkan Spesifikasi
    const specificationsList = document.getElementById("detailSpecifications");
    specificationsList.innerHTML = "";
    product.specifications.forEach((spec) => {
      const specItem = document.createElement("li");
      specItem.innerText = spec;
      specificationsList.appendChild(specItem);
    });

    // Mengatur Carousel Images
    const carouselImages = document.getElementById("carouselImages");
    carouselImages.innerHTML = "";
    product.images.forEach((image, index) => {
      const carouselItem = document.createElement("div");
      carouselItem.className = `carousel-item ${index === 0 ? "active" : ""}`;
      carouselItem.innerHTML = `<img src="${image}" class="d-block w-100" alt="${
        product.title
      } Image ${index + 1}">`;
      carouselImages.appendChild(carouselItem);
    });

    // Mengatur Link WhatsApp
    const whatsappLink = document.getElementById("whatsappLink");
    whatsappLink.href = `https://wa.me/${product.whatsapp}?text=Halo,%20saya%20tertarik%20dengan%20${product.title}.%20Tolong%20berikan%20saya%20informasi%20lebih%20terkait%20properti%20tersebut.%20Saya%20mendapatkan%20informasi%20properti%20tersebut%20dari%20website.`;

    const modal = new bootstrap.Modal(document.getElementById("productModal"));
    modal.show();
  }
}
