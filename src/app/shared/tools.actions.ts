import { Action } from '@ngrx/store';
import { ACTION_TYPE } from './models';

export class SetSelectedTool implements Action {
  readonly type = ACTION_TYPE.SET_SELECTED_TOOL as string;

  constructor(public payload: string) {}
}

export class RotateSelectedTool implements Action {
  readonly type = ACTION_TYPE.ROTATE_TOOL as string;

  constructor() {}
}

export type Actions = SetSelectedTool | RotateSelectedTool;
