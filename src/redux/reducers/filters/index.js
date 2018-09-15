import reduceFilterColor from "@/redux/reducers/filters/color";

export default function reduceFilters(state = {}, action, imageStorage) {
    return {
        color: reduceFilterColor(state.color, action, imageStorage)
    };
}