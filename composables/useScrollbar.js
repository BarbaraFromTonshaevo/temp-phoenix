import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";

const scrollbarKey = Symbol('scrollbar');

export function provideScrollbar() {
    const scrollbar = ref(null);

    provide(scrollbarKey, scrollbar);

    return {
        setScrollbar: (instance) => {
            scrollbar.value = instance
        },
        scrollbar
    }
}

export function useScrollbar() {
    const scrollbar = inject(scrollbarKey, null);
    return scrollbar;
}