<template>
    <div>
      <h2>Tasks</h2>
      <ul>
        <li v-for="task in party.tasks">{{ task }}</li>
      </ul>
      <div v-show="add">
        <div id="form">
          <FormComp title="Task Name :" v-model:text="newTask"></FormComp>
        </div>
        <addButton @click.stop="addTask">
          Add Task
        </addButton>
      </div>
    </div>
  </template>
  
  <script>
  import FormComp from './FormComp.vue'
  import addButton from './addButton.vue'
  
  export default {
    props: ['party'],
    data() {
      return {
        newTask: '',
        add: false
      }
    },
    methods: {
      addTask() {
        if (this.newTask.trim() !== '') {
          this.party.tasks.push(this.newTask)
          this.newTask = ''
          this.add = false // Cache le formulaire après l'ajout de la tâche
        }
      }
    },
    components: {
      FormComp,
      addButton
    }
  }
  </script>
  



<!--<script>
import FormComp from './FormComp.vue'
import addButton from './addButton.vue'


export default {
  props: ['party'],
  data() {
    return {
      newTask: '',
      name: '',
      descr:'',
      theme:'',
    }
  },
  methods: {
    addTask() {
      this.party.tasks.push(this.newTask)
      this.newTask = ''
    }

  }
}
</script>

<template>
    <div>
        <h2>Tasks</h2>
        <ul>
            <li v-for="task in party.tasks">{{ task }}</li>
        </ul>
        <div v-show="add">
            <div id="form">
                <FormComp title="Name :" v-model:text="name"></FormComp>
                <FormComp title="Description :" v-model:text="descr"></FormComp>
                <FormComp title="People :" v-model:text="people"></FormComp>
            </div>
            <addButton @click.stop="submit">
            Add a new party
            </addButton>
        </div>
    </div>
</template>
-->


