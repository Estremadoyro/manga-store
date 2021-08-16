import { NewsBarActionType } from "../action-types";

interface NewsBarJumpAction {
  type: NewsBarActionType.NEWSBAR_JUMP;
  desired: number;
}
interface NewsBarNextAction {
  type: NewsBarActionType.NEWSBAR_NEXT;
  length: number;
}
interface NewsBarPrevAction {
  type: NewsBarActionType.NEWSBAR_PREV;
  length: number;
}
interface NewsBarDoneAction {
  type: NewsBarActionType.NEWSBAR_DONE;
}
interface NewsBarDragAction {
  type: NewsBarActionType.NEWSBAR_DRAG;
  offset: number;
}

export type NewsBarAction =
  | NewsBarJumpAction
  | NewsBarNextAction
  | NewsBarPrevAction
  | NewsBarDoneAction
  | NewsBarDragAction;
