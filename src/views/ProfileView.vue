<template>
  <div class="profile">
    <Alert :msg="msg" :type="type" @show='(payload) => this.isShowNoti = payload' :isShow='this.isShowNoti'></Alert>
    <h1 class="title">Profile</h1>
    <div class="row">
      <p>Email</p>
      <p>{{ this.getValue('LoggedUser') }}</p>
    </div>
    <div class="row">
      <p>Name</p>
      <p>{{ this.getValue('Name') }}</p>
    </div>
    <div class="row">
      <p>DOB</p>
      <p>{{ this.getValue('Dob') }}</p>
    </div>
    <div class="row">
      <p>Phone</p>
      <p>{{ this.getValue('Phone') }}</p>
    </div>
    <div class="row flex-end">
      <button id="submit-btn" @click="handleEdit()">Edit</button>
      <button id="cancel-btn" @click="handleLogout()">Log Out</button>
    </div>
  </div>
</template>
<script>
import Alert from '../components/AlertComponent.vue'
export default {
  methods: {
    getValue (key) {
      return localStorage.getItem(key)
    },
    handleLogout () {
      localStorage.clear()
      this.$router.push('/login')
    },
    handleEdit () {
      this.$router.push({ name: 'profileUpdate' })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.prevRoute = from
    })
  },
  computed: {
    prevRoutePath () {
      return this.prevRoute ? this.prevRoute.path : '/'
    }
  },
  mounted () {
    if (this.prevRoutePath === '/login' || this.prevRoutePath === '/') {
      this.msg = 'Login successfully'
      this.type = 'success'
      this.isShowNoti = true
    } else if (this.prevRoutePath === '/profile/update') {
      this.msg = 'Update successfully'
      this.type = 'success'
      this.isShowNoti = true
    }
  },
  data () {
    return {
      msg: '',
      isShowNoti: false,
      type: ''
    }
  },
  components: {
    Alert
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

.row {
  display: flex;
  flex-wrap: nowrap;
}

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

p {
  font-family: 'Montserrat', sans-serif;
  font-size: 90%;
  color: black;
  border: 1px solid #EEEEEE;
  padding: 2vw 0px;
  padding-left: 1vw;

}

.row p:first-child {
  width: 20%;
}

.row p:last-child {
  width: 80%;
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

.row.flex-end {
  justify-content: flex-end;
  margin-top: 1rem;
}
</style>
