<template>
    <div class="branch-licenses-page bg-base-200 min-h-screen">
      <div class="hero bg-gradient-to-r from-green-400 to-blue-500 text-white py-10">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-4xl font-bold">{{ branch?.name }} Lisansları</h1>
            <p class="py-4">
              {{ branch?.description }}
            </p>
          </div>
        </div>
      </div>
  
      <!-- Lisans Listesi -->
      <div class="container mx-auto py-10">
        <div v-if="branch?.licenses.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="license in branch.licenses" 
            :key="license.id" 
            class="card bg-white shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <figure>
              <img 
                :src="license.image" 
                :alt="license.title" 
                class="w-full h-48 object-cover">
            </figure>
            <div class="card-body">
              <h2 class="card-title text-xl font-bold text-gray-800">
                {{ license.title }}
              </h2>
              <a 
                :href="license.link" 
                target="_blank" 
                class="btn btn-primary mt-2 w-full text-center">
                Detayı Görüntüle
              </a>
            </div>
          </div>
        </div>
        <div v-else>
          <p class="text-center text-xl text-gray-500">Bu şube için lisans bulunamadı.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        branches: [
          {
            id: 1,
            name: "Akdosan Kahramanmaraş",
            description: "Kahramanmaraş şubemizin geri dönüşüm lisansı ve detaylar.",
            licenses: [
              {
                id: 1,
                title: "Lisans Belgesi 1",
                image: "https://via.placeholder.com/300x200",
                link: "https://example.com/kahramanmaras-license-1",
              },
              {
                id: 2,
                title: "Lisans Belgesi 2",
                image: "https://via.placeholder.com/300x200",
                link: "https://example.com/kahramanmaras-license-2",
              },
            ],
          },
          {
            id: 2,
            name: "Akdosan Adana",
            description: "Adana şubemizin geri dönüşüm lisansı ve detaylar.",
            licenses: [
              {
                id: 1,
                title: "Lisans Belgesi 1",
                image: "https://via.placeholder.com/300x200",
                link: "https://example.com/adana-license-1",
              },
            ],
          },
          {
            id: 3,
            name: "Akdosan Erzurum",
            description: "Erzurum şubemizin geri dönüşüm lisansı ve detaylar.",
            licenses: [
              {
                id: 1,
                title: "Lisans Belgesi 1",
                image: "https://via.placeholder.com/300x200",
                link: "https://example.com/erzurum-license-1",
              },
              {
                id: 2,
                title: "Lisans Belgesi 2",
                image: "https://via.placeholder.com/300x200",
                link: "https://example.com/erzurum-license-2",
              },
            ],
          },
        ],
        branch: null,
      };
    },
    created() {
      const branchId = parseInt(this.$route.params.id); // Rota parametresini al
      this.branch = this.branches.find(branch => branch.id === branchId); // Şubeyi bul
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
  