import reduceMainImage, { IStateMainImage } from "@/redux/reducers/mainImage";
import reduceToolbar, { IStateToolbar } from "@/redux/reducers/toolbar";
import reduceTools, { IStateTools } from "@/redux/reducers/tools";
import reduceActiveTool, { IStateActiveTool } from "@/redux/reducers/activeTool";
import ImageStorage from "@/storage/ImageStorage";
import { AnyAction } from "redux";

export interface IState {
    mainImage: IStateMainImage;
    toolbar: IStateToolbar;
    tools: IStateTools;
    activeTool: IStateActiveTool;
}

const createReduceRoot = (imageStorage: ImageStorage) => (state: Partial<IState> = {}, action: AnyAction): IState => ({
    mainImage: reduceMainImage(state.mainImage, action, imageStorage),
    toolbar: reduceToolbar(state.toolbar, action),
    tools: reduceTools(state.tools, action, imageStorage),
    activeTool: reduceActiveTool(state.activeTool, action)
})

export default createReduceRoot

