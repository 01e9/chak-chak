import { actionCreator } from "@/redux/utils/actions";

export const actionToolbarPositionSet = actionCreator<{x: number; y: number}>("TOOLBAR_POSITION");
