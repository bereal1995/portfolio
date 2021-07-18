export const Color = {
    primary: '#18f'
}

export const setBoxShadow = (level) => {
    if (level === 1) {
        return '1px 1px 15px rgba(0,0,0,.2);'
    } else if (level === 2) {
        return '2px 2px 20px rgba(0,0,0,.2);'
    } else if (level === 3) {
        return '3px 3px 35px rgba(0,0,0,.25);'
    }

    return '1px 1px 8px rgba(0,0,0,.15);'
}

export const pxToRem = val => (`${val / 16}rem`);

