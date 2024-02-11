
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


/*import { defineStore } from 'pinia'

export const usePartiesStore = defineStore("PartiesStore", {
  state: () => ({
    currentParties: [],
  }),
  actions: {
    // Charge les données du local storage
    loadPartiesFromLocalStorage() {
      const storedParties = JSON.parse(localStorage.getItem("currentParties"))
      if (storedParties) {
        this.currentParties = storedParties
      }
    },
    addParty(party) {
      this.currentParties.push(party)
      localStorage.setItem('currentParties', JSON.stringify(this.currentParties))
    },
  },
})
*/
/*
import { defineStore } from 'pinia'

export const usePartiesStore = defineStore("PartiesStore", {
  state: () => ({
    currentParties: JSON.parse(localStorage.getItem("currentParties")) || [],
  }),
  addParty(party) {
    this.currentParties.push(party)
    localStorage.setItem('currentParties', JSON.stringify(this.currentParties))
  },
})
*/
/*import { defineStore } from 'pinia'

export const usePartiesStore = defineStore("PartiesStore", {
  state: () => ({
    parties: [],
  }),
  actions: {
    addParty(party) {
      localStorage.setItem('currentParties', JSON.stringify(this.parties))
    },
  }

})*/


