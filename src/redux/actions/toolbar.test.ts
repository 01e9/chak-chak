import { ACTION_TOOLBAR_POSITION_SET, actionToolbarPositionSet } from "@/redux/actions/toolbar";

it('actionToolbarPositionSet', () => {
    expect(actionToolbarPositionSet(11, 12)).toEqual({
        type: ACTION_TOOLBAR_POSITION_SET,
        x: 11,
        y: 12
    })
})