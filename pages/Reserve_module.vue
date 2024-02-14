<template>
  <div class="reserve">
    <form @submit.prevent="reserveSub">
      <h1>Reservieren</h1>
      <p>{{ desk }}</p>
      <p>{{ day }}. {{ month }}</p>
      <input type="text" class="searchTerm" v-model="reserve" placeholder="Search..."/>
      <button type="submit">Submit</button>
    </form>
    <p>{{ reserve }}</p>
  </div>

</template>

<script>
//Gets Date, const months is an array with all months to select the current
const date= new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


export default {

  data(){
    return{
      reserve: '',
      desk: "Tisch 1",
      day: date.getDay(), //gets the current day out of date
      month: months[date.getMonth()], //gets the current month and name of the month

    }
  },

  methods:{
    Confirm(){
      this.$emit('confirm')
    },
    reserveSub(){
      this.$emit('close')
      let reserve = this.reserve
      console.log(reserve) //debugging
      //API Request Options
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "deskId": reserve,
        "reservant": "Yannic"
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      console.log(raw) //debugging
      console.log("Reservation was submitted") //debugging

      //API Post Request to reserve desk. Takes desk number from forms input
      fetch("http://localhost:8080/reservations", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }
  }
}
</script>

<style scoped>

.reserve {
  display: block;
  width: 500px;
  height: 300px;
  border: solid black;

}

.reserve p{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>