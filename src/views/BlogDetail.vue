<template>
    <div class="blog-detail bg-base-200 min-h-screen py-10">
      <div class="container mx-auto">
        <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
        <img :src="post.image" alt="" class="w-full mb-6">
        <p class="text-gray-700">{{ post.content }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        post: {},
      };
    },
    mounted() {
      // URL parametresinden gelen id'yi al ve ilgili gönderiyi yükle
      const postId = this.$route.params.id;
  
      // Örnek verilerle postu buluyoruz
      const samplePosts = [
        {
          id: 1,
          title: "Kağıt Geri Dönüşümünün Önemi",
          image: "https://via.placeholder.com/1200x600",
          content: "Kağıt geri dönüşümü çevre dostu bir gelecek için önemli bir adım...",
        },
        {
          id: 2,
          title: "Sıfır Atık Projesine Katılın",
          image: "https://via.placeholder.com/1200x600",
          content: "Sıfır atık yaklaşımı ile yaşantınızı nasıl dönüştürebilirsiniz?",
        },
        {
          id: 3,
          title: "Geri Dönüşümde Yapılan Hatalar",
          image: "https://via.placeholder.com/1200x600",
          content: "Geri dönüşümde yaygın yapılan hatalar ve bunlardan nasıl kaçınacağınız hakkında bilgi edinin.",
        },
      ];
  
      this.post = samplePosts.find((p) => p.id === Number(postId));
    },
  };
  </script>
  