<template>
    <div class="login">
        <h1 class="title">Login</h1>
        <label>
            <p>Email</p>
            <input type="email" placeholder="example@kyanon.digital">
        </label>
        <label>
            <p>Password</p>
            <input type="password" placeholder="******">
        </label>
        <div class="row">
            <label for="showPassword" class="pw">
                <input type="checkbox" id="showPassword" name="showPassword"/>
                Show password
            </label>
            <button id="submit-btn">Sign In</button>
        </div>
    </div>
</template>
<script>
export default {
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

.login label input::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    font-family: 'Quicksand', sans-serif;
    opacity: 1;
    /* Firefox */
}

.login label input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    font-family: 'Quicksand', sans-serif;
}

.login label input::-ms-input-placeholder {
    /* Microsoft Edge */
    font-family: 'Quicksand', sans-serif;
}
.row{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#submit-btn{
    background-color:#2e09db;
    border: none;
    color: whitesmoke;
    padding:0.6rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
}
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
.pw{
    cursor: pointer;
    font-family: 'Golos Text', sans-serif;
    letter-spacing: .1rem;
}
#showPassword{
    height: 15px;
    width: 15px;
}
</style>
