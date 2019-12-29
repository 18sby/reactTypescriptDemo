import { Dispatch } from 'redux';
import * as CONST from './constants';
import { IAction } from './types';

export function setGlobalSyncId(): IAction {
  return {
    type: CONST.GLOBAL_SYNC_ID,
    payload: {
      data: 'global_sync_id=https://github.com/18sby'
    }
  }
}