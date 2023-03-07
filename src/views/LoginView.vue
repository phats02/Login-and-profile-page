<template>
  <div class="login">
    <Alert :msg="msg" :type="type" @show='(payload) => { this.isShowNoti = payload }' :isShow='this.isShowNoti'></Alert>
    <h1 class="title">Login</h1>
    <label>
      <p>Email</p>
      <input type="email" name="email" :class="{ 'apply-shake': shake }" placeholder="example@kyanon.digital"
        autocomplete="on" v-model.lazy="email" @focus="removeBorderColor">
    </label>
    <label>
      <p>Password</p>
      <input :type='isShowPassword ? "text" : "password"' :class="{ 'apply-shake': shake }" placeholder="******"
        v-model.lazy="password" @focus="removeBorderColor">
    </label>
    <div class="row">
      <label for="showPassword" class="pw">
        <input type="checkbox" id="showPassword" name="showPassword" v-model="isShowPassword" />
        Show password
      </label>
      <button id="submit-btn" @click="handleSubmit()">Sign In</button>
    </div>
  </div>
</template>
<script>
import Alert from '../components/AlertComponent.vue'
export default {
  data () {
    return {
      isShowPassword: false,
      email: null,
      password: null,
      msg: '',
      isShowNoti: false,
      type: '',
      shake: false
    }
  },
  methods: {
    handleSubmit () {
      if (!this.email || !this.password) {
        this.msg = 'Email or password must be not empty'
        this.isShowNoti = true
        document.querySelectorAll('.login>label>input').forEach(el => {
          el.style.borderColor = 'red'
        })
        this.shake = true
        setTimeout(() => {
          this.shake = false
        }, 820) // timeout value depending on the duration of the animation
      }
    },
    removeBorderColor (e) {
      e.target.style.borderColor = null
    }
  },
  components: {
    Alert
  }
}
</script>
<style scoped>
.login {
  max-width: 400px;
  background-color: white;
  padding: 4rem 2rem;
  margin: 2rem auto;
  display: block;
  border-radius: 20px;
  min-height: 60vh
}

.login .title {
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  padding: 2rem;
}

.login>label>input {
  display: block;
  width: 100%;
  padding: 15px 7px;
  border-radius: 8px;
  border: 2px solid #e7e7e9;
  margin: 0.5rem 0px;
  margin-bottom: 1rem;
  -webkit-transition: 0.8s;
  transition: 0.8s;
  outline: none;
}

@import url('https://fonts.googleapis.com/css2?family=Golos+Text&display=swap');

.login label p {
  color: #6343e3;
  font-weight: bold;
  font-family: 'Golos Text', sans-serif;
}

.login label p::after {
  content: ":";
}

@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

.login>label>input::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  font-family: 'Quicksand', sans-serif;
  opacity: 1;
  /* Firefox */
}

.login>label>input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  font-family: 'Quicksand', sans-serif;
}

.login>label>input::-ms-input-placeholder {
  /* Microsoft Edge */
  font-family: 'Quicksand', sans-serif;
}

.login>label>input:focus,
.login>label>input:focus-visible {
  border: 2px solid #2e09db;
  border-radius: 0px;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#submit-btn {
  background: #2e09db;
  border: none;
  color: whitesmoke;
  padding: 0.6rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  -webkit-transition: .5s;
  transition: .5s;
}

@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

.pw {
  cursor: pointer;
  font-family: 'Golos Text', sans-serif;
  letter-spacing: .1rem;
}

#showPassword {
  height: 15px;
  width: 15px;
}

#submit-btn:hover {
  background-color: #4BB543;
  border-radius: 3px;
  transform: scale(1.02);
}

@keyframes shake {

  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

.apply-shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}</style>
