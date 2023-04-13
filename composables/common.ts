import { acceptHMRUpdate, defineStore } from 'pinia';

export const useCommonStore = defineStore('commonStore', () => {
  const activeMenu = ref('');

  function setActiveMenu(name: string) {
    activeMenu.value = name;
  }

  return {
    activeMenu,
    setActiveMenu
  };
});

// if (import.meta.hot)
//   import.meta.hot.accept(acceptHMRUpdate(useCommonStore, import.meta.hot));
