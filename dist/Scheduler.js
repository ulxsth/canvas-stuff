export const schedule = (callback) => {
    let time = Date.now();
    let id = 0;
    let loop = () => {
        callback(Math.min(1, (Date.now() - time) * 0.001));
        id = requestAnimationFrame(loop);
        time = Date.now();
    };
    loop();
    return {
        end: () => cancelAnimationFrame(id)
    };
};
//# sourceMappingURL=Scheduler.js.map