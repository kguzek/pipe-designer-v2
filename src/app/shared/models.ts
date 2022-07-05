export interface Tool extends DeleteTool {
  desc: string;
  rotationStage: number;
}

export interface DeleteTool {
  name: string;
  selected: boolean;
}
