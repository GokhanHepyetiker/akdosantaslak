<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row items-center justify-between gap-8">
      <!-- Metin İçeriği (Ortada) -->
      <div class="text-center lg:text-left lg:w-1/3 mb-8 lg:mb-0">
        <h1 class="text-5xl font-bold mb-4 text-blue-700">
          Bize Ulaşın
        </h1>
        <p class="py-6 text-lg text-gray-700">
          Akdösan Kağıt Geri Dönüşüm ekibi olarak her zaman yanınızdayız. Sorularınız
          veya geri bildirimleriniz için bizimle iletişime geçebilirsiniz.
        </p>
      </div>

      <!-- İletişim Formu ve Harita -->
      <div class="lg:w-2/3 flex flex-col lg:flex-row gap-8 justify-between w-full">
        <!-- İletişim Formu -->
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control mb-4">
              <label class="label">
                <span class="label-text">Adınız</span>
              </label>
              <input type="text" placeholder="Adınızı girin" class="input input-bordered transition-transform duration-300 hover:scale-105" />
            </div>
            <div class="form-control mb-4">
              <label class="label">
                <span class="label-text">E-posta</span>
              </label>
              <input type="email" placeholder="E-posta adresinizi girin" class="input input-bordered transition-transform duration-300 hover:scale-105" />
            </div>
            <div class="form-control mb-4">
              <label class="label">
                <span class="label-text">Mesajınız</span>
              </label>
              <textarea class="textarea textarea-bordered transition-transform duration-300 hover:scale-105" placeholder="Mesajınızı yazın"></textarea>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary transition-transform duration-300 hover:scale-110 hover:bg-green-600">
                Gönder
              </button>
            </div>
          </div>
        </div>

        <!-- Google Maps Harita -->
        <div class="map-container w-full lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.0369978684407!2d36.95304099999999!3d37.554192099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152ddd14369ba40d%3A0x93555c46777f025d!2sAKD%C3%96SAN%20KAHRAMANMARA%C5%9E%20DEPO!5e0!3m2!1sen!2str!4v1732099141764!5m2!1sen!2str"
            width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Flex düzeni ile içerikleri hizalama */
.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.map-container {
  margin-top: 20px;
}

iframe {
  width: 100%;
  max-width: 100%; /* Tam genişlik */
  height: 450px;
  border: none;
}

.card {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

@media (min-width: 1024px) {
  .hero-content {
    flex-direction: row;
    justify-content: center;
  }

  .lg\:w-1\/3 {
    width: 33%;
  }

  .lg\:w-2\/3 {
    width: 66%;
  }

  .map-container {
    margin-top: 0;
  }
}

@media (max-width: 1024px) {
  /* Mobil ekranlarda */
  .map-container {
    margin-top: 20px;
  }

  .hero-content {
    flex-direction: column; /* Dikey hizalama */
  }

  .lg\:w-1\/3 {
    width: 100%;
  }

  .lg\:w-2\/3 {
    width: 100%;
  }

  iframe {
    height: 350px; /* Mobilde daha küçük harita */
  }
}
</style>
