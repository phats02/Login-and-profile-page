<template>
  <div class="profile">
    <Alert :msg="msg" :type="type" @show='(payload) => this.isShowNoti = payload' :isShow='this.isShowNoti'></Alert>
    <h1 class="title">Profile</h1>
    <label>
      <input type="text" name="name" :class="{ 'apply-shake': shake }" autocomplete="on" @focus="removeBorderColor"
        v-model.lazy="name">
      <p class="in_name">Full name</p>
    </label>
    <label>
      <input type="date" name="dob" :class="{ 'apply-shake': shake }" autocomplete="on" @focus="removeBorderColor"
        v-model.lazy="dob" id="dob">
      <p>Day Of Birth</p>
    </label>
    <label>
      <input type="email" name="name" :class="{ 'apply-shake': shake }" autocomplete="on" @focus="removeBorderColor"
        v-model.lazy="email">
      <p>Email</p>
    </label>
    <label>
      <input type="tel" name="phone" :class="{ 'apply-shake': shake }" autocomplete="on" @focus="removeBorderColor"
        v-model.lazy="phone">
      <p>Phone</p>
    </label>
    <div class="row">
      <button id="submit-btn" @click="handleSubmit()">Update</button>
      <button id="cancel-btn" @click="handleCancel()">Cancel</button>
    </div>
  </div>
</template>
<script>
import Alert from '../components/AlertComponent.vue'
export default {
  data () {
    return {
      name: localStorage.getItem('Name'),
      dob: localStorage.getItem('Dob'),
      email: localStorage.getItem('LoggedUser'),
      phone: localStorage.getItem('Phone'),
      isShowNoti: false,
      type: '',
      shake: false,
      msg: ''
    }
  },
  methods: {
    handleSubmit () {
      if (!this.name || !this.dob || !this.email || !this.phone) {
        this.msg = 'All input must be filled'
        document.querySelectorAll('.profile>label>input').forEach(el => {
          el.style.borderColor = 'red'
        })
        this.isShowNoti = true
        this.shake = true
        setTimeout(() => {
          this.shake = false
        }, 820)
      } else if (!this.validateEmail(this.email)) {
        this.msg = 'Email invalidate'
        document.querySelectorAll('.profile>label>input[type="email"]').forEach(el => {
          el.style.borderColor = 'red'
        })
        this.isShowNoti = true
        // this.isShowNoti = true
        this.shake = true
        setTimeout(() => {
          this.shake = false
        }, 820)
      } else if (!this.validatePhone(this.phone)) {
        this.msg = 'Phone invalidate'
        document.querySelectorAll('.profile>label>input[type="tel"]').forEach(el => {
          el.style.borderColor = 'red'
        })
        this.isShowNoti = true
        // this.isShowNoti = true
        this.shake = true
        setTimeout(() => {
          this.shake = false
        }, 820)
      } else {
        localStorage.setItem('Name', this.name)
        localStorage.setItem('Dob', this.dob)
        localStorage.setItem('LoggedUser', this.email)
        localStorage.setItem('Phone', this.phone)
        this.$router.go(-1)
      }
    },
    handleCancel () {
      this.$router.go(-1)
    },
    removeBorderColor (e) {
      e.target.style.borderColor = null
    },
    validateEmail (email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    },
    validatePhone (phone) {
      return String(phone)
        .toLowerCase()
        .match(
          /(84|0[3|5|7|8|9])+([0-9]{8})\b/
        )
    }
  },
  components: {
    Alert
  },
  mounted () {
    document.getElementById('dob').max = new Date().toISOString().split('T')[0]
  }
}
</script>
<style scoped>
.profile {
  max-width: 400px;
  background-color: white;
  padding: 4rem 2rem;
  margin: 2rem auto;
  display: block;
  border-radius: 20px;
  min-height: 60vh;
}

.profile .title {
  text-align: left;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 3rem;
}

.profile>label>input {
  display: block;
  width: 100%;
  padding: 15px 7px;
  border-radius: 8px;
  border: 2px solid #e7e7e9;
  margin: 0.5rem 0px;
  margin-bottom: 1rem;
  -webkit-transition: 0.8s ease;
  transition: 0.8s ease;
  outline: none;
}

@import url('https://fonts.googleapis.com/css2?family=Golos+Text&display=swap');

.profile label p {
  color: #babcc0;
  font-weight: bold;
  font-family: 'Golos Text', sans-serif;
  -webkit-transition: 0.8s ease;
  transition: 0.8s ease;
}

label p::after {
  content: ":";
}

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

input[type="date"]::-webkit-datetime-edit-month-field,
input[type="date"]::-webkit-datetime-edit-day-field,
input[type="date"]::-webkit-datetime-edit-year-field,
input[type="date"]::-webkit-datetime-edit-text {
  font-family: 'Montserrat', sans-serif;
}

.row {
  width: 100%;
  display: flex;
  justify-content: flex-end;
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

#cancel-btn {
  margin-left: 2rem;
  background: whitesmoke;
  border: none;
  color: #2e09db;
  padding: 0.6rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  -webkit-transition: .5s;
  transition: .5s;
  font-weight: bold;
}

label {
  display: flex;
  flex-direction: column-reverse;
}

.profile>label>input:focus,
.profile>label>input:focus-visible {
  border: 2px solid #2e09db;
  border-radius: 0px;
}

.profile>label>input:focus,
.profile>label>input:focus-visible+p {
  color: #2e09db;
}

#submit-btn:hover {
  background-color: #4BB543;
  border-radius: 3px;
  transform: scale(1.02);
}

#cancel-btn:hover {
  background-color: #EEEEEE;
  border-radius: 3px;
  transform: scale(1.02);
}

</style>
