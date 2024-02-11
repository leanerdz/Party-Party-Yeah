import { reactive } from 'vue'

const savedParties = JSON.parse(localStorage.getItem("currentParties")) || [];

export const store = reactive ({
  parties: savedParties,
  currentParties: savedParties,
  addParties(party) {
    this.parties.push(party);
    localStorage.setItem("currentParties", JSON.stringify(this.parties));
    this.currentParties = [...this.parties];
  }
})


/*
import { reactive } from 'vue'

const savedParties = JSON.parse(localStorage.getItem("currentParties")) || [];

export const store = reactive ({
  parties: savedParties,
  currentParties: savedParties,
  addParties(party) {
    this.parties.push(party);
    localStorage.setItem("currentParties", JSON.stringify(this.parties));
    this.currentParties = [...this.parties];
  }
})
*/
