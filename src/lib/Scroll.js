import {animateScroll as scroll} from 'react-scroll';

export const scrollToTop = (options) => {
    scroll.scrollToTop({
        duration: 400,
        smooth: true,

        ...options
    });
}
