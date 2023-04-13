export function useMenu() {
  const activeMenu = useState('activeMenu', () => '');

  function changeActiveMenu(item: string) {
    activeMenu.value = item;
  }

  return {
    activeMenu,
    changeActiveMenu
  };
}
