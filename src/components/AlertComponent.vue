<!-- eslint-disable vue/no-mutating-props -->
<template>
  <Transition>
    <div class="alert" :class="this.type" v-if="isShow">
      <span class="closebtn" @click="this.$emit('show', false)">&times;</span>
      {{ msg }}
    </div>
  </Transition>
</template>
<script>

export default {
  data () {
    return {
      isShowAlert: true
    }
  },
  props: ['type', 'msg', 'isShow']
}
</script>
<style scoped>
.alert {
  padding: 20px;
  background-color: #f44336;
  color: white;
  position: absolute;
  z-index: 1000;
  top: 2vh;
  right: 0px;
  width: 30vw;
  opacity: .8;
}
.v-enter-active,
.v-leave-active {
  /* animation-delay: 1s; */
  transition: all .2s;
}

.v-enter-from,
.v-leave-to {
  right:-34vw;
}
.closebtn{
  font-size: 2rem;
  margin-right: 30px;
  cursor: pointer;
}
.alert.success {background-color: #04AA6D;}
.alert.info {background-color: #2196F3;}
.alert.warning {background-color: #ff9800;}
</style>
