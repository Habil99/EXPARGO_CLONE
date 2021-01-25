<template>
  <div class="rates container">
    <div class="heading">
      <span>TARİFLƏR</span>
      <div class="pills">
        <button
          @submit.prevent
          @click="selectedTab = 'Turkey'"
          ref="turkeyTab"
          class="activeTab"
        >
          <img
            src="../assets/tr.png"
            alt="Tr"
            style="width: 20px; height: 20px"
          />
          Türkiyə
        </button>
        <button
          @submit.prevent
          @click="selectedTab = 'Germany'"
          ref="germanTab"
        >
          <img
            src="../assets/de.png"
            alt="De"
            style="width: 20px; height: 16px"
          />Almaniya
        </button>
      </div>
      <div class="tables">
        <transition name="slide" mode="out-in" type="animation">
          <component :is="selectedTab"></component>
        </transition>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "@/components/Footer";
import Turkey from "@/components/Turkey";
import Germany from "@/components/Germany";
export default {
  components: {
    Footer,
    Turkey,
    Germany,
  },
  data() {
    return {
      selectedTab: "Turkey",
    };
  },
  watch: {
    selectedTab(value) {
      if (value == "Turkey") {
        this.$refs.turkeyTab.classList.add("activeTab");
        this.$refs.germanTab.classList.remove("activeTab");
      } else if (value == "Germany") {
        this.$refs.germanTab.classList.add("activeTab");
        this.$refs.turkeyTab.classList.remove("activeTab");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/_rates";
.container {
  margin-top: 100px !important;
}
.slide-enter-active {
  animation: slide-in 0.4s linear forwards;
}
.slide-leave-to {
  animation: slide-out 0.4s linear forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(50px);
    opacity: 0;
  }
}
</style>