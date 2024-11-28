<template>
    <div class="blog-page bg-base-200 min-h-screen">
      <!-- Hero -->
      <div class="hero bg-gradient-to-r from-green-400 to-blue-500 text-white py-20 relative -mt-10">
        <div class="hero-content text-center">
          <div class="max-w-2xl mx-auto px-4">
            <h1 class="text-5xl font-bold mb-4">
              Blog
            </h1>
            <p class="text-lg font-light">
              Çevre bilinci, sürdürülebilirlik ve geri dönüşüm hakkında en son yazılarımıza göz atın.
            </p>
          </div>
        </div>
      </div>
  
      <!-- Blog Yazıları -->
      <div class="container mx-auto py-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="post in posts" 
            :key="post.id" 
            class="card bg-white shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <figure>
              <img 
                :src="post.image" 
                :alt="post.title" 
                class="w-full h-48 object-cover">
            </figure>
            <div class="card-body">
              <h2 class="card-title text-xl font-bold text-gray-800">
                {{ post.title }}
              </h2>
              <p class="text-gray-600 text-sm">
                {{ post.date }}
              </p>
              <p class="text-gray-700 text-sm py-2">
                {{ post.summary }}
              </p>
              <router-link 
                :to="`/blog/${post.id}`" 
                class="btn btn-primary mt-2 w-full text-center">
                Devamını Oku
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
        posts: [
          {
            id: 1,
            title: "Kağıt Geri Dönüşümünün Önemi",
            image: "https://via.placeholder.com/300x200",
            date: "25 Kasım 2024",
            summary: "Kağıt geri dönüşümü, çevreye olan katkıları ve sürdürülebilirlik için neden önemli? Detayları öğrenin.",
          },
          {
            id: 2,
            title: "Sıfır Atık Projesine Katılın",
            image: "https://via.placeholder.com/300x200",
            date: "20 Kasım 2024",
            summary: "Sıfır atık yaklaşımı ile yaşantınızı nasıl dönüştürebilirsiniz? İpuçları ve püf noktaları burada.",
          },
          {
            id: 3,
            title: "Geri Dönüşümde Yapılan Hatalar",
            image: "https://via.placeholder.com/300x200",
            date: "18 Kasım 2024",
            summary: "Geri dönüşümde yaygın yapılan hatalar ve bunlardan nasıl kaçınacağınız hakkında bilgi edinin.",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Hero margin ve typography düzenlemesi */
  .hero {
    margin-top: 4rem; /* Navbar altında başlar */
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  }
  
  .hero h1 {
    font-size: 3rem;
  }
  
  .hero p {
    font-size: 1.25rem;
  }
  
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
  