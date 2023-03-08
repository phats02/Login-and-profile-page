<template>
  <div class="toggle" @click="toggle">
    <p>Dark Mode</p>
    <label class="switch">
      <input type="checkbox" v-model="isDark" @click="isDark = !isDark">
      <span class="slider round"></span>
    </label>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isDark: false
    }
  },
  computed: {
  },
  methods: {
    toggle () {
      this.isDark = !this.isDark
      if (this.isDark) {
        document.querySelectorAll('*').forEach(element => {
          element.setAttribute('mode', 'dark')
        })
      } else {
        document.querySelectorAll('*').forEach(element => {
          element.setAttribute('mode', 'light')
        })
      }
    }
  }
}
</script>
<style scoped>
/* The switch - the box around the slider */
.toggle {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  max-width: 90vw;
}

.toggle p {
  font-weight: bold;
  color: #778899;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  scale: 0.7;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked+.slider {
  background-color: #2196F3;
}

input:focus+.slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
<style>
html[mode="dark"] {
  background-color: #222 !important;
}

body[mode="dark"] {
  filter: contrast(90%) invert(90%) hue-rotate(180deg) !important;
  -ms-filter: invert(100%);
  -webkit-filter: contrast(90%) invert(90%) hue-rotate(180deg) !important;
  text-rendering: optimizeSpeed;
  image-rendering: optimizeSpeed;
  -webkit-font-smoothing: antialiased;
  -webkit-image-rendering: optimizeSpeed;
}

input[mode="dark"],
textarea[mode="dark"],
select[mode="dark"] {
  color: purple;
}

img[mode="dark"],
video[mode="dark"],
iframe[mode="dark"],
canvas[mode="dark"],
svg[mode="dark"],
embed[type='application/x-shockwave-flash'][mode="dark"],
object[type='application/x-shockwave-flash'][mode="dark"],
*[style*='url('][mode="dark"] {
  filter: invert(100%) hue-rotate(-180deg) !important;
  -ms-filter: invert(100%) !important;
  -webkit-filter: invert(100%) hue-rotate(-180deg) !important;
}
body[mode='light']{
    background-color: #f4f4f4;
    width: 100vw;
    overflow-x: hidden;
  }
</style>
