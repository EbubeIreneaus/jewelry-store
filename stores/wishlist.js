import {defineStore} from 'pinia'

export const useWishlist = defineStore('wishlist', {
    state: ()=>({
        items: []
    }),

    actions: {
        addItem(title, price, desc, image, id, quantity=1){
            for (let index = 0; index < this.items.length; index++) {
                if (this.items[index].id == id) {
                  return true;
                }
              }
            let item = {title, price, desc, image, id, quantity}
            this.items.push(item)
        
        },
        removeItem(index){
            this.items.splice(index, 1);
        }
    },
    persist:{
        storage: persistedState.localStorage
    },
})