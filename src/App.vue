<template>
  <Navbar />
  <router-view />
</template>
<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar,
  },
};
</script>
<style lang="scss">
$purple: #4e008e;
$font: "Montserrat", sans-serif;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $font;
  list-style: none;
}
button:focus {
  outline: none;
  appearance: none;
  box-shadow: 0;
}
html,
body {
  overflow-y: auto;
}

.fade-enter-active {
  animation: slide-in 0.4s linear forwards;
}
.fade-leave-to {
  animation: slide-out 0.4s linear forwards;
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slide-out {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8fade);
  }
}
</style>
