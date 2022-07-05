import { Tool } from './models';
import {
  ACTION_TYPE,
  Actions as Action,
  SetSelectedTool,
} from './tools.actions';

const initialState: Tool[] = [
  {
    name: 'cross',
    desc: 'Cross-shaped',
    selected: false,
    rotationStage: 0,
  },
  {
    name: 'T',
    desc: 'T-shaped',
    selected: false,
    rotationStage: 0,
  },
  {
    name: 'L',
    desc: 'L-shaped',
    selected: false,
    rotationStage: 0,
  },
  {
    name: 'straight',
    desc: 'Straight',
    selected: false,
    rotationStage: 0,
  },
];

export function toolReducer(state: Tool[] = initialState, action: Action) {
  console.log(action.type, state);

  switch (action.type as ACTION_TYPE) {
    case ACTION_TYPE.SET_SELECTED_TOOL:
      return state.map((tool) => ({
        ...tool,
        selected: tool.name === (action as SetSelectedTool).payload,
      }));
    case ACTION_TYPE.ROTATE_TOOL:
      return state.map((tool) =>
        tool.selected
          ? { ...tool, rotationStage: (tool.rotationStage + 1) % 4 }
          : tool
      );
    default:
      return state;
  }
}
