import { stagger } from "framer-motion";

export const animateimg = {
    initial: { y: 50, opacity: 0 },
    animate: i => ({ y: 0, opacity: 1, transition: { delay: 0.05 * i } }),
}