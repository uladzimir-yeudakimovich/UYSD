import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';

export interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
  loading?: boolean;
}

export class LoadChildNodes {
  static readonly type = '[Tree] Load Child Nodes';
  constructor(public nodeId: string) {}
}

export interface TreeStateModel {
  treeData: TreeNode[];
}

@State<TreeStateModel>({
  name: 'tree',
  defaults: {
    treeData: []
  }
})
@Injectable()
export class TreeState {
  constructor() {}

  @Selector()
  static getTreeData(state: TreeStateModel) {
    return state.treeData;
  }

  @Action(LoadChildNodes)
  loadChildNodes(ctx: StateContext<TreeStateModel>, action: LoadChildNodes) {
    // Implement loading logic here, e.g., fetch child nodes from server
  }
}
