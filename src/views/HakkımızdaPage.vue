<template>
  <div class="prose mx-auto p-4">
    <div class="grid md:grid-cols-2 gap-6 items-center">
      <!-- Görsel -->
      <div class="relative">
        <img 
          src="https://via.placeholder.com/600x400" 
          alt="Geri Dönüşüm" 
          class="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
        <!-- Dekoratif animasyon -->
        <div class="absolute inset-0 bg-green-500 opacity-20 rounded-lg animate-pulse"></div>
      </div>
      <!-- Metin İçeriği -->
      <div>
        <h1 class="text-4xl font-bold text-center md:text-left mb-4">Hakkımızda</h1>
        <p class="text-lg text-gray-700">
          Akdösan Kağıt Geri Dönüşüm, doğa dostu bir gelecek için çalışıyor. 
          Misyonumuz, atık kağıtları geri dönüştürerek çevremizi korumak ve sürdürülebilirlik sağlamak.
        </p>
        <div class="mt-6 text-center md:text-left">
          <button 
            class="btn btn-primary transition-transform duration-300 hover:scale-110 hover:bg-green-600">
            Daha Fazla Bilgi Alın
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Görsel animasyonu */
.animate-pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.2;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.3;
  }
}
</style>
