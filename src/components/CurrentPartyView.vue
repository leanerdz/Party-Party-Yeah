<!--<script>
import Tasks from './Tasks.vue'
//import Shopping from './Shopping.vue'
//import Invitations from './Invitations.vue'

export default {
  props: ['selectedParty'],
  components: {
    Tasks,
    //Shopping,
    //Invitations
  },
  data() {
    return {
      activeTab: 'tasks'
    }
  }
}
</script>

<template>
  <div>
    <h1>{{ selectedParty.name }}</h1>
    <nav>
      <ul>
        <li @click="activeTab = 'tasks'">Tasks</li>
        <li @click="activeTab = 'shopping'">Shopping</li>
        <li @click="activeTab = 'invitations'">Invitations</li>
      </ul>
    </nav>
    <div>
      <component :is="activeTab" :party="selectedParty"></component>
    </div>
  </div>
</template>

-->
<script>
    import Tasks from './Tasks.vue'

    export default {
        props: ['selectedParty'],
        components: {
        Tasks,
        //Shopping,
        //Invitations
        },
        data() {
        return {
            activeTab: 'tasks'
        }
        }
    }
</script>

<template>
  <div v-if="selectedParty">
    <h1>{{ selectedParty.name }}</h1>
    <nav>
      <ul>
        <li @click="activeTab = 'tasks'">Tasks</li>
        <!--<li @click="activeTab = 'shopping'">Shopping</li>-->
        <!--<li @click="activeTab = 'invitations'">Invitations</li>-->
      </ul>
    </nav>
    <div>
      <component :is="activeTab" :party="selectedParty"></component>
    </div>
  </div>
</template>

