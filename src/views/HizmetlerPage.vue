<script>
import { services } from "../data/services";
export default {
  data() {
    return {
      services,
    };
  },
};
</script>

<template>
  <div class="p-4">
    <h1 class="text-4xl text-center">Hizmetlerimiz</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      <div v-for="service in services" :key="service.title" class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{{ service.icon }} {{ service.title }}</h2>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
