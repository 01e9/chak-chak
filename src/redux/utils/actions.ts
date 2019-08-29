import { AnyAction } from "redux";

export interface IAction<Payload = any> extends AnyAction {
    type: string;
    payload: any;
}

interface IActionCreator<Payload> {
    (payload: Payload): IAction<Payload>;
    type: string;
}

export const actionCreator = <Payload = never>(type: string): IActionCreator<Payload> => {
    const creator = (payload: Payload) => ({type, payload});
    creator.type = type;
    return creator;
}
