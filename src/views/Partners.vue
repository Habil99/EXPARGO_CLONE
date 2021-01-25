<template>
  <div class="container-fluid partners">
    <div class="container-lg">
      <div class="row mb-2">
        <div class="col text-center text-uppercase heading p-3">
          <span class="employee">Əməkdaşlar</span>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-between flex-wrap">
          <a href="http://www.flo.com.tr" target="_blank">
            <img src="../assets/expargo-logos-01.png" class="image" alt=""
          /></a>
          <a href="http://www.trendyol.com" target="_blank">
            <img src="../assets/expargo-logos-02.png" class="image" alt="" />
          </a>
          <a href="http://www.boyner.com.tr" target="_blank">
            <img src="../assets/expargo-logos-03.png" class="image" alt=""
          /></a>
          <a href="https://www.gittigidiyor.com" target="_blank">
            <img src="../assets/expargo-logos-04.png" class="image" alt="" />
          </a>
          <a href="http://www.n11.com.tr" target="_blank">
            <img src="../assets/expargo-logos-05.png" class="image" alt="" />
          </a>
          <a href="http://www.hm.com/tr" target="_blank">
            <img src="../assets/expargo-logos-06.png" class="image" alt=""
          /></a>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "@/components/Footer";
export default {
  components: {
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/_employee";
.partners {
  margin-bottom: 100px !important;
}
.heading {
  margin-top: 120px !important;
}
</style>