<template>
  <footer class="footer p-10 bg-gradient-to-r from-blue-500 to-green-500 text-white fade-in">
    <div class="flex flex-col md:flex-row gap-8 w-full justify-center items-center"> 
      <div>
        <span class="footer-title">Hakkımızda</span>
        <router-link to="/about" class="link link-hover transition duration-300 hover:text-yellow-400">Hikayemiz</router-link>
        <router-link to="/about/vision" class="link link-hover transition duration-300 hover:text-yellow-400">Vizyon</router-link>
        <router-link to="/about/mission" class="link link-hover transition duration-300 hover:text-yellow-400">Misyon</router-link>
      </div>

      <div>
        <span class="footer-title">Hizmetler</span>
        <a class="link link-hover transition duration-300 hover:text-yellow-400">Kağıt Toplama</a>
        <a class="link link-hover transition duration-300 hover:text-yellow-400">Kağıt Ayrıştırma</a>
        <a class="link link-hover transition duration-300 hover:text-yellow-400">Geri Dönüşüm</a>
      </div>

      <div>
        <span class="footer-title">Sosyal Medya</span>
        <a class="link link-hover transition duration-300 hover:text-yellow-400 flex items-center">
          <i class="fab fa-facebook mr-2"></i> Facebook
        </a>
        <a class="link link-hover transition duration-300 hover:text-yellow-400 flex items-center">
          <i class="fab fa-twitter mr-2"></i> Twitter
        </a>
        <a class="link link-hover transition duration-300 hover:text-yellow-400 flex items-center">
          <i class="fab fa-instagram mr-2"></i> Instagram
        </a>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row gap-8 justify-center items-center"> 
      <div class="footer-card">
        <p class="flex items-center">
          <i class="fas fa-map-marker-alt mr-2"></i> Eyüp Sultan, 25013. Sk. NO1/A, 46050 Dulkadiroğlu/Kahramanmaraş
        </p>
        <p class="flex items-center mt-4">
          <i class="fas fa-phone-alt mr-2"></i> +90 344 236 0830
        </p>
      </div>

      <div class="footer-card">
        <p class="flex items-center">
          <i class="fas fa-map-marker-alt mr-2"></i> Onur Mah. Tekel Cd. 5/2A Seyhan/Adana
        </p>
        <p class="flex items-center mt-4">
          <i class="fas fa-phone-alt mr-2"></i> +90 530 920 4124
        </p>
      </div>

      <div class="footer-card">
        <p class="flex items-center">
          <i class="fas fa-map-marker-alt mr-2"></i> Şükrüpaşa Mah. Güllülü Cad. No:78 Yakutiye/Erzurum
        </p>
        <p class="flex items-center mt-4">
          <i class="fas fa-phone-alt mr-2"></i> +90 442 245 00 20
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  mounted() {
    // Scroll-trigger animasyonu için basit bir fade-in
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

    const footer = document.querySelector("footer");
    observer.observe(footer);
  },
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 1s ease-in-out;
}

.footer-title {
  font-weight: bold;
}

.footer .link {
  display: block;
  margin-bottom: 5px;
}

.footer .flex {
  display: flex;
  align-items: center;
}

.footer .mr-2 {
  margin-right: 8px;
}

footer p {
  margin-bottom: 8px;
}

.footer-card {
  padding: 15px;
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.9), /* Blue-500 */
    rgba(34, 197, 94, 0.9)   /* Green-500 */
  ); /* Footer temasıyla uyumlu bir gradient */
  color: white; /* Beyaz yazı */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 120px;
  height: 100%;
}

/* Kart hover efekti */
.footer-card:hover {
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

</style>
