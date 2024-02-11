<script >
import currentPartiesItem from './currentPartiesItem.vue'
import addButton from './addButton.vue'
import heartIcon from './icons/heartIcon.vue'
import FormComp from './FormComp.vue'
import { usePartiesStore } from '../stores/PartiesStore'
export default {
  components: { FormComp, currentPartiesItem, addButton, heartIcon},
  setup() {
    const store = usePartiesStore()
    return {
      store,
    }
  },
  // NE pas faire avec Pinia mais plutot avec le store de base car facile avec l'option. 
  data() {
    return {
      parties:[],
      name: '',
      descr:'',
      theme:'',
      date:'',
      place:'',
      title:'',
      add:false,
    }
  },
  methods:{
    submit(){
      this.parties.push({name:this.name,descr: this.descr,theme: this.theme, date:this.date, place: this.place})
      this.store.addParties(parties)
      console.log(this.parties)
      this.name=""
      this.descr=""
      this.theme=""
      this.date=""
      this.place=""
      console.log(this.parties)
    },
    showForm(){
      this.add = !this.add
      
    }
    
  },
}
</script>

<template>
<ul>
  <li v-for="party in store.currentParties" :key="party.name" @click.stop="console.log(party.name) ">
    <currentPartiesItem>
      <template #icon>
        <heartIcon/>
      </template>
      <template #heading>{{ party.name }}</template>
      <template #date>{{ party.date }}</template>
      <template #place>{{ party.place }}</template>
      <template #descr>{{ party.descr }}</template>
      <template #theme>{{ party.theme }}</template>
    </currentPartiesItem>
  </li>
</ul>   

  <addButton @click.stop="showForm">
    Add a new party
  </addButton>
<div v-show="add">
  <div id="form">
    <FormComp title="Name :" v-model:text="name"></FormComp>
    <FormComp title="Description :" v-model:text="descr"></FormComp>
    <FormComp title="Theme :" v-model:text="theme"></FormComp>
    <FormComp type="date" title="Date :" v-model:text="date"></FormComp>
    <FormComp title="Place :" v-model:text="place"></FormComp>
  </div>
  <addButton @click.stop="submit">
    Add a new party
  </addButton>
</div>

</template>

<style scoped>
ul{
  list-style-type: none;
  margin: none;
}
#form{
  margin: 3rem;
}
</style>

