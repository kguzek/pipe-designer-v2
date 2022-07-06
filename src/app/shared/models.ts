export interface Pipe {
  name: string;
  desc: string;
  orientation: number;
}

export interface DeleteTool {
  name: string;
  selected: boolean;
}

export interface Tool extends Pipe, DeleteTool {}

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
