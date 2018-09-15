import reduceToolBrush from "@/redux/reducers/tools/brush";

export default function reduceTools(state = {}, action, imageStorage) {
    return {
        brush: reduceToolBrush(state.brush, action, imageStorage)
    };
}