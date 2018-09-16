import reduceMainImage from "@/redux/reducers/mainImage";
import reduceToolbar from "@/redux/reducers/toolbar";
import reduceTools from "@/redux/reducers/tools";
import reduceActiveTool from "@/redux/reducers/activeTool";

export default function createReduceRoot(imageStorage) {
    return (state = {}, action) => ({
        mainImage: reduceMainImage(state.mainImage, action, imageStorage),
        toolbar: reduceToolbar(state.toolbar, action),
        tools: reduceTools(state.tools, action, imageStorage),
        activeTool: reduceActiveTool(state.activeTool, action)
    })
}
