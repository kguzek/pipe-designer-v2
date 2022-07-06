import { Action } from '@ngrx/store';
import { ACTION_TYPE, Pipe } from './models';

export type PipeActionPayload = { row: number; column: number; pipe: Pipe };

export class PlacePipeInGrid implements Action {
  readonly type = ACTION_TYPE.PLACE_PIPE as string;

  constructor(public payload: PipeActionPayload) {}
}

export class ResetPipes implements Action {
  readonly type = ACTION_TYPE.RESET_PIPES as string;

  constructor() {}
}

export type Actions = Action | PlacePipeInGrid;
