import {defineStore} from 'pinia'

export const useApi = defineStore('url', {
    state: ()=>{
        return {'url': 'http://localhost:8000', 'previous':null}
    }
})