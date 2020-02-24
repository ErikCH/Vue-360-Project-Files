<template>
  <div class="home">
    <div class="box">
      <button @click="show = !show">Toggle Transition</button>
      <button @click="showA = !showA">Toggle Animation</button>
      <transition name="slide-fade">
        <h3 v-if="show">Transition Example</h3>
      </transition>
      <transition name="bounce">
        <h3 v-if="showA">Animation Example</h3>
      </transition>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      show: true,
      showA: true
    };
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 200px;
  border: 1px solid red;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 9.3s ease;
}
.slide-fade-leave-active {
  transition: all 9.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 8.5s;
}
.bounce-leave-active {
  animation: bounce-in 8.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
