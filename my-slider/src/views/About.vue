<template>
  <div>
    <app-Header />
    <Slayt />
    <app-Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Slayt from "@/slayts/Slayt.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    "app-Header": Header,
    Slayt,
    "app-Footer": Footer
  }
};
</script>

