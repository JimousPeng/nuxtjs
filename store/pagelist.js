/*
 * @Date: 2022-03-19 11:04:59
 * @LastEditors: jimouspeng
 * @Description: 作为store的一个module使用
 * @LastEditTime: 2022-03-19 11:06:05
 * @FilePath: \nuxtjs\store\pagelist.js
 */
export const state = () => {
    return {
        list: [],
    };
};

export const mutations = {
    addEventListener(state, item) {
        state.list.push(item);
    },
};
