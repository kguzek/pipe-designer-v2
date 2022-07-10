export enum PipeName {
  cross = 'cross',
  T = 'T',
  L = 'L',
  straight = 'straight',
}

export interface Pipe {
  name: PipeName;
  desc: string;
  selected: boolean;
  orientation: number;
}

export interface DeleteTool {
  name: string;
  desc?: string;
  selected: boolean;
  orientation?: number;
}

export interface PipeGrid {
  [row: number]: {
    [column: number]: Pipe;
  };
}

export enum ACTION_TYPE {
  SET_SELECTED_TOOL = '[SELECTED TOOL] Set',
  ROTATE_TOOL = '[SELECTED TOOL] Rotate',
  PLACE_PIPE = '[PIPE] Place',
  RESET_PIPES = '[PIPE] Reset',
}

export const PIPE_CONNECTIONS: { [name in PipeName]: number[] } = {
  cross: [0, 1, 2, 3],
  T: [1, 2, 3],
  L: [2, 3],
  straight: [1, 3],
};
