import { defineStore } from 'pinia';

export const navigationStore = defineStore({
  state: {
    navigation: [
      {
        name: 'Home',
        href: '/',
        current: true,
      },
      {
        name: 'Registro',
        href: '/registro',
        current: false,
      },
    ],
  },
  actions: {
    setNavigation(navigation) {
      this.state.navigation = navigation;
    },
    setCurrent(index) {
      this.state.navigation[index].current = true;
    },
  },
});