export const ACTION_TOOL_ACTIVATE = 'ACTION_TOOL_ENABLE'

export const actionToolActivate = (name) => ({
    type: ACTION_TOOL_ACTIVATE,
    name
})

export const ACTION_TOOL_DEACTIVATE = 'ACTION_TOOL_DISABLE'

export const actionToolDeactivate = (name) => ({
    type: ACTION_TOOL_DEACTIVATE,
    name
})
