export const state = () => ({
    counter: 0,
});

export const mutations = {
    incream(state) {
        state.counter += 1;
    },
};
