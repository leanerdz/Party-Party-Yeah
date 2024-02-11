
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


