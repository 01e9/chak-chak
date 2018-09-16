import reduceToolBrush from "@/redux/reducers/tools/brush";
import reduceToolColor from "@/redux/reducers/tools/color";

export default function reduceTools(state = {}, action, imageStorage) {
    return {
        brush: reduceToolBrush(state.brush, action, imageStorage),
        color: reduceToolColor(state.color, action, imageStorage),
    };
}