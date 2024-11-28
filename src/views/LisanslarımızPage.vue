<template>
    <div class="licenses-page bg-base-200 min-h-screen">
      <!-- Sayfa Başlığı -->
      <div class="hero bg-gradient-to-r from-green-400 to-blue-500 text-white py-10">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-4xl font-bold">Lisanslarımız</h1>
            <p class="py-4">
              Akdosan şubelerimiz için geçerli lisanslarımızı keşfedin.
            </p>
          </div>
        </div>
      </div>
  
      <!-- Lisans Kartları -->
      <div class="container mx-auto py-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Tekil Lisans Kartı -->
          <div 
            v-for="branch in branches" 
            :key="branch.id" 
            class="card bg-white shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <figure>
              <img 
                :src="branch.image" 
                :alt="branch.name" 
                class="w-full h-48 object-cover">
            </figure>
            <div class="card-body">
              <h2 class="card-title text-xl font-bold text-gray-800">
                {{ branch.name }}
              </h2>
              <p class="text-gray-700 text-sm py-2">
                {{ branch.description }}
              </p>
              <router-link 
                :to="{ name: 'BranchLicenses', params: { id: branch.id } }" 
                class="btn btn-primary mt-2 w-full text-center">
                Lisansı Görüntüle
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Şube bilgileri
        branches: [
          {
            id: 1,
            name: "Akdosan Kahramanmaraş",
            image: "https://via.placeholder.com/300x200",
            description: "Kahramanmaraş şubemizin geri dönüşüm lisansı ve detaylar.",
          },
          {
            id: 2,
            name: "Akdosan Adana",
            image: "https://via.placeholder.com/300x200",
            description: "Adana şubemizin geri dönüşüm lisansı ve detaylar.",
          },
          {
            id: 3,
            name: "Akdosan Erzurum",
            image: "https://via.placeholder.com/300x200",
            description: "Erzurum şubemizin geri dönüşüm lisansı ve detaylar.",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .card {
    border-radius: 10px;
    overflow: hidden;
  }
  
  .card-body {
    padding: 1rem;
  }
  </style>
  