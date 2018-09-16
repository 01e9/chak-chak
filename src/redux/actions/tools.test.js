import { ACTION_TOOL_DEACTIVATE, ACTION_TOOL_ACTIVATE, actionToolDeactivate, actionToolActivate } from "@/redux/actions/tools";

it('actionToolActivate', () => {
    expect(actionToolActivate('test')).toEqual({
        type: ACTION_TOOL_ACTIVATE,
        name: 'test'
    })
})

it('actionToolDeactivate', () => {
    expect(actionToolDeactivate('test')).toEqual({
        type: ACTION_TOOL_DEACTIVATE,
        name: 'test'
    })
})
