import { actionCreator } from "@/redux/utils/actions";

export const actionToolActivate = actionCreator<string>("TOOL_ACTIVATE");
export const actionToolDeactivate = actionCreator<string>("TOOL_DEACTIVATE");

