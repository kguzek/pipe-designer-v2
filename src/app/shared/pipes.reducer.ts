import { ACTION_TYPE, Pipe, PipeGrid } from './models';
import {
  Actions as Action,
  PipeActionPayload,
  PlacePipeInGrid,
} from './pipes.actions';

type GenericObject = { [key: string]: any };

function removeProperty(originalObj: GenericObject, key: string | number) {
  const obj: GenericObject = {};
  for (const property in originalObj) {
    if (property === key.toString()) continue;
    if (!originalObj.hasOwnProperty(property)) continue;
    obj[property] = originalObj[property];
  }
  return obj;
}
const initialState = {};

function deletePipe(state: PipeGrid, { row, column }: PipeActionPayload) {
  const oldRow = state[row] ?? {};
  const keys = Object.keys(oldRow);
  if (keys.length === 1 && oldRow[column]) {
    return removeProperty(state, row);
  }

  const newRow = removeProperty(oldRow, column);

  return { ...state, [row]: newRow };
}

const placePipe = (
  state: PipeGrid,
  { row, column, pipe }: PipeActionPayload
) => ({
  ...state,
  [row]: { ...(state[row] ?? {}), [column]: pipe },
});

export function pipeReducer(state: PipeGrid = initialState, action: Action) {
  console.debug(action.type, state);

  switch (action.type as ACTION_TYPE) {
    case ACTION_TYPE.PLACE_PIPE:
      const payload = (action as PlacePipeInGrid).payload;
      const func = payload.pipe.name === 'btn-delete' ? deletePipe : placePipe;
      const newState = func(state, payload);
      return newState;
    case ACTION_TYPE.RESET_PIPES:
      return initialState;
    default:
      return state;
  }
}
