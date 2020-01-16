<template>
  <div class="home text-center mt-5">
    <img alt="Git logo" class="mb-4 img-fluid" src="../assets/logo2.png" />
    <HelloWorld msg="Git & GitHub Notları" />
    <router-link to="/slayts">
      <button type="button" class="btn btn-outline-dark btn-lg mt-5">Hadi Başlayalım</button>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
<style>
