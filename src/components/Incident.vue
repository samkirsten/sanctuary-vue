<template>
    <h1>{{msg}}</h1>

</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Ready to log an incident'
      }
    },

    methods: {
      getLocation () {
        navigator.geolocation.getCurrentPosition(this.showPosition)
      },

      showPosition (position) {
        var lat = position.coords.latitude
        var long = position.coords.longitude
        console.log(lat)
        console.log(long)
      }
    },

    created: function () {
      // `this` points to the vm instance
      this.getLocation()
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
