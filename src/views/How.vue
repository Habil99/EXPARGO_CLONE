<template>
  <div class="app-welcome mb-5 mt-5">
    <div class="container mb-4">
      <div class="row">
        <div class="col text-center pt-3 mt-4">
          <span class="text-uppercase how">Necə işləyir</span>
        </div>
      </div>
    </div>
    <div class="rows">
      <img src="../assets/basket.png" alt="" />
      <p>Qeydiyyatdan keçin</p>
    </div>
    <div class="rows">
      <img src="../assets/expargo.png" alt="" />
      <p>Bağlamanızı xaricdəki ünvanımıza göndərin</p>
    </div>
    <div class="rows">
      <img src="../assets/homeicon.png" alt="" />
      <p>Bağlamanızı Bakı anbarından təhvil alın</p>
    </div>
  </div>
  <Footer />
</template>
<script>
import Footer from "@/components/Footer";
export default {
  name: "How",
  components: {
    Footer,
  },
};
</script>

<style lang="scss">
@import "./styles/_appwelcome";
.how {
  font-weight: bold;
  color: #593196;
  font-size: 30px;
}

.app-welcome {
  margin-top: 80px !important;
  margin-bottom: 90px !important;
}
</style>