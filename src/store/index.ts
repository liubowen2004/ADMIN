import { defineStore } from "pinia";
import { Names } from "./store_name";

export const useInfoStore = defineStore(Names.TEST, {
  state: () => {
    return {
			name:'我是ID',
			age:10
		}
  },
	getters:{
		newName():string{
			return `这个getter修饰符名称 ${this.name}`
		},
		
	},
  actions: {

  }


})