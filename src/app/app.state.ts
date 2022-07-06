import { Tool, PipeGrid } from './shared/models';

export interface AppState {
  readonly tools: Tool[];
  readonly pipes: PipeGrid;
}
