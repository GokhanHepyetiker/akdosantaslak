<template>
    <div class="partner-slider-container py-10">
      <h2 class="text-3xl font-bold text-center mb-8">Partnerlerimiz</h2>
      <div class="overflow-hidden">
        <div class="partner-slider flex">
          <!-- Logoların her biri -->
          <div
            v-for="(partner, index) in partners"
            :key="index"
            class="partner-logo flex justify-center items-center px-6"
          >
            <a :href="partner.link" target="_blank">
              <img
                :src="partner.logo"
                :alt="'Partner ' + (index + 1)"
                class="max-h-20 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PartnerSlider",
    data() {
      return {
        partners: [
          { logo: 'https://via.placeholder.com/150x50/0000FF/FFFFFF?text=Logo1', link: 'https://www.partner1.com' },
          { logo: 'https://via.placeholder.com/150x50/FF0000/FFFFFF?text=Logo2', link: 'https://www.partner2.com' },
          { logo: 'https://via.placeholder.com/150x50/00FF00/FFFFFF?text=Logo3', link: 'https://www.partner3.com' },
          { logo: 'https://via.placeholder.com/150x50/FF00FF/FFFFFF?text=Logo4', link: 'https://www.partner4.com' },
          { logo: 'https://via.placeholder.com/150x50/FFFF00/FFFFFF?text=Logo5', link: 'https://www.partner5.com' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .partner-slider-container {
    background-color: #f5f5f5;
    width: 100%;
    position: relative;
  }
  
  .partner-logo {
    min-width: 150px; /* Her bir logo için genişlik */
  }
  
  .partner-logo img {
    transition: transform 0.3s ease;
  }
  
  .partner-logo img:hover {
    transform: scale(1.1);
  }
  
  .overflow-hidden {
    width: 100%;
    overflow: hidden; /* Taşan öğeler gizlenir */
  }
  
  .partner-slider {
    display: flex;
    animation: slideAnimation 10s linear infinite;
  }
  
  .partner-slider:hover {
    animation-play-state: paused; /* Fare üzerine geldiğinde animasyon durur */
  }
  
  /* Kaydırma animasyonu */
  @keyframes slideAnimation {
    0% {
      transform: translateX(100%); /* Başlangıçta logolar sağdan başlasın */
    }
    100% {
      transform: translateX(-100%); /* Sol tarafa kayıp sağdan çıkar */
    }
  }
  </style>
  