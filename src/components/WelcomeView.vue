<script >
import currentPartiesItem from './currentPartiesItem.vue'
import addButton from './addButton.vue'
import heartIcon from './icons/heartIcon.vue'
import FormComp from './FormComp.vue'
import { store } from '../stores/PartiesStore'
import { useRouter } from 'vue-router'

export default {
  components: { FormComp, currentPartiesItem, addButton, heartIcon},
  setup() {
    const router = useRouter()
    const showPartyDetails = (party) => {
    router.push({ name: 'party', params: { id: party.id } });
    }
    return {
      store,
      showPartyDetails,
    }
  },
  data() {
    return {
      parties:[],
      name: '',
      descr:'',
      theme:'',
      date:'',
      place:'',
      title:'',
      tasks:'',
      shopping:'',
      invitations:'',
      add:false,
    }
  },
  methods:{
    submit(){
      this.store.addParties({
        name: this.name,
        descr: this.descr,
        theme: this.theme,
        date: this.date,
        place: this.place,
        tasks:'',
        shopping:'',
        invitations:'',
        id:this.name,

      });
      this.resetForm();
    },
    resetForm() {
      this.name = '';
      this.descr = '';
      this.theme = '';
      this.date = '';
      this.place = '';
    },
    showForm(){
      this.add = !this.add
    },
    getCurrentParty(party){
      localStorage.setItem(party.name, JSON.stringify(party))
    },
  },
  computed: {
    setID(){
      return this.name.trim()
    },
  }
}
</script>

<template>
  <ul>
    <li v-for="party in store.currentParties" :key="party.name" :party="party" @click.stop="showPartyDetails(party)">
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

