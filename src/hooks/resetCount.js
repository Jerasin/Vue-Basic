import {ref , reactive} from 'vue'

export const resetCount= () => {
    const countHookReactive = reactive({countHook: 0});
    const countHookRef = ref(0);
    return {countHookRef,countHookReactive}
}
