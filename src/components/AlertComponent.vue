<!-- eslint-disable vue/no-mutating-props -->
<template>
  <Transition>
    <div class="alert" :class="this.type" v-if="this.isShow">
      <div class="row">
        <span class="closebtn" @click="this.$emit('show', false)">&times;</span>
        <p>{{ msg }}</p>
      </div>
      <div id="myProgress">
        <div id="myBar"></div>
      </div>
    </div>
  </Transition>
</template>
<script>

export default {
  data () {
    return {
    }
  },
  props: ['type', 'msg', 'isShow'],
  updated () {
    const elem = document.getElementById('myBar')
    let width = 100
    if (!this.isShow) {
      width = 100
      return
    }
    const e = this
    const id = setInterval(frame, 80)
    function frame () {
      if (width < 0) {
        clearInterval(id)
        e.$emit('show', false)
      } else {
        width--
        elem.style.width = width + '%'
      }
    }
  }
}
</script>
<style scoped>
.alert {
  background-color: #f44336;
  color: white;
  position: absolute;
  z-index: 1000;
  top: 5vh;
  right: 0px;
  width: 30vw;
  opacity: .8;
}

.row {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  padding: 6px;
}

.v-enter-active,
.v-leave-active {
  /* animation-delay: 1s; */
  transition: all .2s;
}

.v-enter-from,
.v-leave-to {
  right: -34vw;
}

.closebtn {
  font-size: 2rem;
  margin-right: 30px;
  cursor: pointer;
}

.alert.success {
  background-color: #04AA6D;
}

.alert.info {
  background-color: #2196F3;
}

.alert.warning {
  background-color: #ff9800;
}

#myProgress {
  flex-basis: 100%;
  width: 100%;
  background-color: transparent;
}

#myBar {
  width: 0%;
  height: 5px;
  background-color: #FF8C00;
}
</style>
