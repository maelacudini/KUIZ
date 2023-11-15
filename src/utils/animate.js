
export const animateimg = {
    initial: { y: 50, opacity: 0 },
    animate: i => ({ y: 0, opacity: 1, transition: { delay: 0.1 * i } }),
}

export const generals = {
    initial: {
        y: 50,
        opacity: 0
    },
    animate: i => ({
        y: 0,
        opacity: 1,
        transition: { duration: 0.3, delay: 0.1 * i }
    }),
}