import {
  ACTION_TYPE,
  DIRECTION,
  Pipe,
  PipeGrid,
  PipeName,
  PIPE_CONNECTIONS,
} from './models';
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

const getPipeConnections = (pipe: Pipe) =>
  PIPE_CONNECTIONS[pipe.name].map((side) => (side + pipe.orientation) % 4);

function validatePipePlacement(
  state: PipeGrid,
  { row, column, pipe: p }: PipeActionPayload
): boolean {
  const pipe = p as Pipe;
  const pipeConnections = getPipeConnections(pipe);
  console.log('Pipe connections:', pipeConnections);

  let tempConnections: DIRECTION[];

  function checkAdjoiningPipe(
    pipeToCheck: Pipe | undefined,
    directionToPipe: DIRECTION
  ) {
    // Ensure there is a pipe in the cell in that direction
    if (!pipeToCheck) return true;
    tempConnections = getPipeConnections(pipeToCheck);
    const connectionA = pipeConnections.includes(directionToPipe);
    const directionFromPipe = (directionToPipe + 2) % 4;
    const connectionB = tempConnections.includes(directionFromPipe);
    const bothConnected = connectionA && connectionB;
    const neitherConnected = !connectionA && !connectionB;
    // This means that the connection is legal
    if (bothConnected || neitherConnected) return true;
    // console.error(
    //   'Cannot place pipe because of existing pipe in direction %d.\nProblematic pipe:',
    //   directionToPipe,
    //   pipeToCheck,
    //   tempConnections
    // );
    return false;
  }

  const checks = [];

  for (const dir in DIRECTION) {
    const direction: DIRECTION = parseInt(dir);
    if (isNaN(direction)) continue;
    const isVertically = direction % 2 === 0;
    const [rowIdx, colIdx] = isVertically
      ? // Get the next/previous row in the same column
        [row - 1 + direction, column]
      : // Get the next/previous column in the same row
        [row, column + 2 - direction];
    const cellToCheck = state[rowIdx]?.[colIdx];
    checks.push(() => checkAdjoiningPipe(cellToCheck, direction));
  }

  return checks.every((check) => check());
}

export function pipeReducer(state: PipeGrid = initialState, action: Action) {
  console.debug(action.type, state);

  switch (action.type as ACTION_TYPE) {
    case ACTION_TYPE.PLACE_PIPE:
      const payload = (action as PlacePipeInGrid).payload;
      if (payload.pipe.name === 'btn-delete') {
        return deletePipe(state, payload);
      }
      if (!validatePipePlacement(state, payload)) return state;
      return placePipe(state, payload);
    case ACTION_TYPE.RESET_PIPES:
      return initialState;
    default:
      return state;
  }
}
