import { DeleteTool, Pipe, PipeGrid } from './shared/models';

export interface AppState {
  readonly tools: Array<Pipe | DeleteTool>;
  readonly pipes: PipeGrid;
}
