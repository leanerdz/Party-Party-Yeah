<script>

export default {
  props:  {
    text:{
      type:String,
    },
    title:{
      type:String,
    }, 
    type:{
      type:[String, Number, Date ],
      default:String,
    },
  },
  emits: ['update:text']
}
</script>

<template>
  <h3>{{ title }}</h3>
  <input
    :type="type"
    :value="text" 
    @input="$emit('update:text', $event.target.value)"
  />
</template>

<style scoped>
input{
    width: 20rem;
    height: 2rem;
    justify-content: center;
    border-color: #FF7979;
    border-radius: 10px;
    border-style: solid;
    border-width: 2px;
}
</style>../stores/PartiesStore