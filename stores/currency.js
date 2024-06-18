import { defineStore } from "pinia";

export const useCurrency = defineStore('currency', {
    state: ()=>(
        {currency: 'USD'}
    ),

    persist: {
        storage: persistedState.localStorage,
      }
})