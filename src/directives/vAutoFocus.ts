export const vAutoFocus = {
    mounted: (el: { focus: () => void; }) => {
        el.focus();
    }
}