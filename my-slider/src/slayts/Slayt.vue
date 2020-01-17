<template>
  <div>
    <div class="row mt-5 align-items-center">
      <p>{{info[i].bas}}</p>
    </div>

    <div class="mt-5 slayt_footer">
      <button type="button" class="btn btn-outline-secondary float-left" @click="nav('prev')">Önceki</button>
      <button
        type="button"
        class="btn btn-outline-secondary float-right"
        @click="nav('next')"
      >Sonraki</button>
    </div>
  </div>
</template>

<script>
/* burada js de yer alacak olan bilgiler dönecek. */
import { info } from "./data";
export default {
  name: "Slayt",
  data() {
    return {
      info: info,
      i: 0
    };
  },
  methods: {
    nav(side) {
      if (side === "prev") {
        if (this.i === 0) {
          this.i = 0;
        } else {
          this.i--;
        }
      } else {
        if (this.i === this.info.length - 1) {
          this.i = this.info.length - 1;
        } else {
          this.i++;
        }
      }

      console.log(this.i);
    }
  }
};
</script>

<style scoped>
.slayt_footer {
  border-top: 1px dotted #cccccc;
  padding-top: 1rem;
}
</style>