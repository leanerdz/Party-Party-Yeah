import { reactive } from 'vue'

const savedParties = JSON.parse(localStorage.getItem("currentParties")) || [];
const savedTasks = JSON.parse(localStorage.getItem("currentTasks")) || [];

export const store = reactive ({
  parties: savedParties,
  tasks:savedTasks,
  currentParties: savedParties,
  currentTasks:savedTasks,
  addParties(party) {
    this.parties.push(party);
    localStorage.setItem("currentParties", JSON.stringify(this.parties));
    this.currentParties = [...this.parties];
  },
  /*addTask(task) {
    this.tasks.push(task);
    localStorage.setItem("currentTasks", JSON.stringify(this.tasks));
    this.currentTasks = [...this.tasks];
  }*/
})

