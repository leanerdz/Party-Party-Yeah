  <script>
  import FormComp from './FormComp.vue'
  import addButton from './addButton.vue'
  import { store } from '../stores/PartiesStore'

  export default {
        props: ['party'],
        components: {
        FormComp,
        addButton
        },
        setup(){
            store
        },
        data() {
        return {
            tasks: [],
            name:'',
            descr:'',
            add:false,
        }
        },
        methods: {
            submit(){
                this.store.addTask({
                    descr: this.descr,
                    name: this.name,
                });
                this.resetForm()
            },
            showForm(){
                this.add = !this.add
            },
            resetForm(){
                this.name = '';
                this.descr = '';
            }
        }
    }
  </script>

<template>
    <div>
      <h2>Tasks</h2>
      <ul>
        <li v-for="task in tasks">
            <input type="checkbox">{{ task.name }} : {{ task.descr }}
        </li>
      </ul>
        <addButton @click.stop="showForm">
            Add a new party
        </addButton>
      <div v-show="add">
        <div id="form">
          <FormComp title="Name" v-model:text="name"></FormComp>
          <FormComp title="Description" v-model:text="descr"></FormComp>
          <addButton @click.stop="submit">
            Add Task
          </addButton>
        </div>
      </div>
    </div>
  </template>
  
  



