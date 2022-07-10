import { ACTION_TYPE, Pipe, DeleteTool, PipeName } from './models';
import {
  Actions as Action,
  RotateSelectedTool,
  SetSelectedTool,
} from './tools.actions';

const initialState: Array<Pipe | DeleteTool> = [
  {
    name: 'cross' as PipeName,
    desc: 'Cross-shaped',
    selected: false,
    orientation: 0,
  },
  {
    name: 'T' as PipeName,
    desc: 'T-shaped',
    selected: false,
    orientation: 0,
  },
  {
    name: 'L' as PipeName,
    desc: 'L-shaped',
    selected: false,
    orientation: 0,
  },
  {
    name: 'straight' as PipeName,
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
  state: Array<Pipe | DeleteTool> = initialState,
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
      const isAntiClockwise = (action as RotateSelectedTool).payload;
      const getOrientation = (tool: Pipe) =>
        (tool.orientation + (isAntiClockwise ? 3 : 1)) % 4;

      return state.map((tool) =>
        tool.selected
          ? { ...tool, orientation: getOrientation(tool as Pipe) }
          : tool
      );
    default:
      return state;
  }
}
