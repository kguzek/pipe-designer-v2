import { ACTION_TYPE, DeleteTool, Tool } from './models';
import { Actions as Action, SetSelectedTool } from './tools.actions';

const initialState: Array<Tool | DeleteTool> = [
  {
    name: 'cross',
    desc: 'Cross-shaped',
    selected: false,
    orientation: 0,
  },
  {
    name: 'T',
    desc: 'T-shaped',
    selected: false,
    orientation: 0,
  },
  {
    name: 'L',
    desc: 'L-shaped',
    selected: false,
    orientation: 0,
  },
  {
    name: 'straight',
    desc: 'Straight',
    selected: false,
    orientation: 0,
  },
  {
    name: 'btn-delete',
    selected: false,
  },
];

export function toolReducer(
  state: Array<Tool | DeleteTool> = initialState,
  action: Action
) {
  console.debug(action.type, state);

  switch (action.type as ACTION_TYPE) {
    case ACTION_TYPE.SET_SELECTED_TOOL:
      return state.map((tool) => ({
        ...tool,
        selected: tool.name === (action as SetSelectedTool).payload,
      }));
    case ACTION_TYPE.ROTATE_TOOL:
      return state.map((tool) =>
        tool.selected
          ? { ...tool, orientation: ((tool as Tool).orientation + 1) % 4 }
          : tool
      );
    default:
      return state;
  }
}
