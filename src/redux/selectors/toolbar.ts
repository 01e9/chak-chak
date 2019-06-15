import { IState } from "@/redux/reducers";

export const selectToolbarPosition = (state: IState) => ({
    x: state.toolbar.x,
    y: state.toolbar.y
})
