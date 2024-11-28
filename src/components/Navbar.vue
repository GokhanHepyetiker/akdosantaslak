<template>
  <div class="navbar bg-base-100 shadow-md relative">
    <div class="flex-1">
      <!-- Logo Görseli -->
      <router-link to="/">
        <a class="btn btn-ghost normal-case text-xl transition-transform duration-300 hover:scale-105">
          <img 
            src="@/assets/logo2.png" 
            alt="Akdösan Logo" 
            class="h-12" />
        </a>
      </router-link>
    </div>
    <!-- Büyük Ekran Menü -->
    <div class="hidden md:flex flex-none">
      <ul class="menu menu-horizontal px-1">
        <li class="transition duration-300 hover:text-blue-500">
          <router-link to="/">Anasayfa</router-link>
        </li>
        <!-- Hakkımızda Menüsü -->
        <li class="relative transition duration-300 hover:text-blue-500 group">
          <!-- Hakkımızda Link -->
          <router-link to="/about" class="flex items-center">
            Hakkımızda
          </router-link>
          <!-- Alt Menü -->
          <ul 
            class="absolute left-0 mt-9 w-48 bg-base-100 shadow-lg rounded-md z-50 hidden group-hover:flex flex-col"
          >
            <li class="hover:bg-gray-100">
              <router-link to="/about/vision" class="block px-4 py-2">Vizyonumuz</router-link>
            </li>
            <li class="hover:bg-gray-100">
              <router-link to="/about/mission" class="block px-4 py-2">Misyonumuz</router-link>
            </li>
            <!-- Lisanslarımız Linki Eklendi -->
            <li class="hover:bg-gray-100">
              <router-link to="/licenses" class="block px-4 py-2">Lisanslarımız</router-link>
            </li>
          </ul>
        </li>
        <li class="transition duration-300 hover:text-blue-500">
          <router-link to="/services">Hizmetlerimiz</router-link>
        </li>
        <li class="transition duration-300 hover:text-blue-500">
          <router-link to="/blog">Blog</router-link>
        </li>
        <li class="transition duration-300 hover:text-blue-500">
          <router-link to="/contact">İletişim</router-link>
        </li>
      </ul>
    </div>
    <!-- Küçük Ekran Menü -->
    <div class="md:hidden">
      <button 
        @click.stop="toggleMenu" 
        class="btn btn-ghost btn-circle transition-transform duration-300 hover:rotate-90">
        <i class="fas fa-bars"></i>
      </button>
      <div 
        v-if="isMenuOpen" 
        class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50"
        ref="menu"
      >
        <!-- Kapatma Düğmesi -->
        <div class="flex justify-end p-2">
          <button 
            @click="closeMenu" 
            class="btn btn-ghost btn-circle text-red-500">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <ul class="menu menu-compact p-2">
          <li class="transition duration-300 hover:text-blue-500">
            <router-link to="/" @click="closeMenu">Anasayfa</router-link>
          </li>
          <li>
            <!-- Küçük Ekran Alt Menüsü -->
            <span @click="toggleSubmenu" class="cursor-pointer transition duration-300 hover:text-blue-500">Hakkımızda</span>
            <ul v-if="isSubmenuOpen" class="p-2 bg-base-100 shadow-lg">
              <li>
                <router-link to="/about/vision" @click="closeMenu">Vizyonumuz</router-link>
              </li>
              <li>
                <router-link to="/about/mission" @click="closeMenu">Misyonumuz</router-link>
              </li>
              <!-- Lisanslarımız Linki Eklendi -->
              <li>
                <router-link to="/licenses" @click="closeMenu">Lisanslarımız</router-link>
              </li>
            </ul>
          </li>
          <li class="transition duration-300 hover:text-blue-500">
            <router-link to="/services" @click="closeMenu">Hizmetlerimiz</router-link>
          </li>
          <li class="transition duration-300 hover:text-blue-500">
            <router-link to="/blog" @click="closeMenu">Blog</router-link>
          </li>
          <li class="transition duration-300 hover:text-blue-500">
            <router-link to="/contact" @click="closeMenu">İletişim</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isSubmenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      this.isSubmenuOpen = false; // Menü kapandığında alt menüyü de kapat
    },
    toggleSubmenu() {
      this.isSubmenuOpen = !this.isSubmenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
      this.isSubmenuOpen = false;
    },
    handleOutsideClick(event) {
      if (this.isMenuOpen && this.$refs.menu && !this.$refs.menu.contains(event.target)) {
        this.closeMenu();
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleOutsideClick);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleOutsideClick);
  },
};
</script>

<style scoped>
/* Küçük ekran animasyonu */
.menu-compact {
  animation: slideIn 0.5s ease-in-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
