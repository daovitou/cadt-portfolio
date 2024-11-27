import { defineStore } from "pinia";
import { createSolutionBuilder } from "typescript";
import { ref, onMounted, onBeforeUnmount } from "vue";

const useScreenSize = defineStore("screenSize", () => {
  const width = ref(Number(localStorage.getItem("screenSize")));
  const stateSidebar = ref(false);
  const updateScreenSize = () => {
    width.value = window.innerWidth;
    localStorage.setItem("screenSize",width.value.toString())
    if (width.value < 769) {
      stateSidebar.value = true;
    } else {
      stateSidebar.value = false;
    }
  };
  const stateToggleSidebar = () => {
    stateSidebar.value = !stateSidebar.value;
  };
  onMounted(() => {
    window.addEventListener("resize", updateScreenSize);
    if (width.value < 769) {
      stateSidebar.value = true;
    } else {
      stateSidebar.value = false;
    }
  });
  onBeforeUnmount(() => {
    window.removeEventListener("resize", updateScreenSize);
  });

  return { stateSidebar, width, stateToggleSidebar };
});

export default useScreenSize;
