import {generateMedia} from "styled-media-query";

export const breakPoint = {
    LG: 1080,
    MD: 720,
}

export const media = generateMedia({
    lg: breakPoint.LG + 'px',
    md: breakPoint.MD + 'px',
});
