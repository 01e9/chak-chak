import reduceMainImage, { IStateMainImage } from "@/redux/reducers/mainImage";
import reduceToolbar, { IStateToolbar } from "@/redux/reducers/toolbar";
import reduceTools, { IStateTools } from "@/redux/reducers/tools";
import reduceActiveTool, { IStateActiveTool } from "@/redux/reducers/activeTool";
import reduceSize, { IStateSize } from "@/redux/reducers/size";
import ImageStorage from "@/storage/ImageStorage";
import { IAction } from "@/redux/utils/actions";

export interface IState {
    mainImage: IStateMainImage;
    toolbar: IStateToolbar;
    tools: IStateTools;
    activeTool: IStateActiveTool;
    size: IStateSize;
}

const createReduceRoot = (imageStorage: ImageStorage) => (state: Partial<IState> = {}, action: IAction): IState => ({
    mainImage: reduceMainImage(state.mainImage, action, imageStorage),
    toolbar: reduceToolbar(state.toolbar, action),
    tools: reduceTools(state.tools, action, imageStorage),
    activeTool: reduceActiveTool(state.activeTool, action),
    size: reduceSize(state.size, action),
})

export default createReduceRoot

