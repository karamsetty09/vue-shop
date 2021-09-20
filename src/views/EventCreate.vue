<template>
<div>
  <h1>Create Event, {{user.id}}</h1>
  <p> This event was created by {{user.name}} </p>
  <ul>
    <li v-for="category in categories" :key="category">{{category}}</li>
  </ul>
</div>
  
</template>


<script>

import {mapState} from 'vuex'

export default {

// easy way to use array when no renaming is required.
computed: mapState(['user', 'categories'])

//Easy way for renaming and calling the store variables.
// computed: mapState({
//   user: 'user',
//   categories: 'categories'
// })

// Reagular way of declaring.
// computed: mapState({
//   userName: state => state.user.name,
//   userID: state => state.user.id,
//   categories: state => state.categories
// })

//   one way of linking store data to variable for display
// computed: {
//   userName(){
//     return this.$store.state.user.name
//   }
// }
}
</script>

<style>

</style>