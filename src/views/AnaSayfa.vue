<template>
  <div>
    <!-- Hero kısmı -->
    <div class="hero min-h-screen bg-base-200 relative overflow-hidden">
      <!-- Arka Plan Görselliği -->
      <div class="absolute inset-0">
        <img 
          src="https://via.placeholder.com/1920x1080" 
          alt="Geri Dönüşüm Arka Plan" 
          class="w-full h-full object-cover opacity-20">
      </div>

      <!-- İçerik -->
      <div 
        class="hero-content text-center z-10 animate-fadeIn">
        <div class="max-w-md">
          <h1 
            class="text-5xl font-bold transition-transform duration-500 hover:scale-105">
            Kağıdı Dönüştür, Dünyayı Değiştir!
          </h1>
          <p class="py-6 text-lg text-gray-800">
            Akdösan Kağıt Geri Dönüşüm ile çevreye katkı sağlayın.
          </p>
          <button 
            class="btn btn-primary transition-transform duration-300 hover:scale-110 hover:bg-green-600">
            Hizmetlerimizi İnceleyin
          </button>
        </div>
      </div>

      <!-- Hareketli Kağıt Görselleri -->
      <div class="absolute bottom-10 right-10 w-20 h-20">
        <img 
          src="https://via.placeholder.com/80x80/000000/FFFFFF?text=Kağıt" 
          alt="Kağıt" 
          class="w-full h-full object-cover animate-bounce opacity-50">
      </div>
      <div class="absolute top-10 left-20 w-10 h-10">
        <img 
          src="https://via.placeholder.com/50x50/000000/FFFFFF?text=Kağıt" 
          alt="Kağıt" 
          class="w-full h-full object-cover animate-pulse opacity-60">
      </div>
    </div>

    <!-- Partnerlerimiz Slider -->
    <PartnerSlider />
  </div>
</template>

<script>
// PartnerSlider'ı yalnızca bu sayfada import ediyoruz
import PartnerSlider from "../components/PartnerSlider.vue";

export default {
  components: {
    PartnerSlider, // PartnerSlider bileşenini buraya ekliyoruz
  },

  mounted() {
    // Fade-in efektini tetiklemek için Intersection Observer
    const hero = document.querySelector(".hero-content");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(hero);
  },
};
</script>

<style scoped>
/* Fade-in animasyonu */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 1.5s ease-out;
}

/* Hareketli şekil animasyonları */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

.animate-pulse {
  animation: pulse 1.5s infinite;
}
</style>
