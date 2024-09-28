// animations.js

export const fadeIn = (direction = 'up', delay = 0) => {
    let x = 0;
    let y = 0;

    // Setting x or y movement based on direction
    if (direction === 'left') x = -100;
    if (direction === 'right') x = 100;
    if (direction === 'up') y = 100;
    if (direction === 'down') y = -100;

    return {
        hidden: {
            opacity: 0,
            x: x,
            y: y,
        },
        show: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.7,
                delay: delay,
            },
        },
    };
};
