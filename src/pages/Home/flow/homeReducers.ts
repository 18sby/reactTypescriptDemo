import { IAction } from '@/global/types';
import * as CONST from './constants';
import * as TYPES from '../types';

const initState: TYPES.IHomePageStoreState = {
  syncId: '默认值',
  asyncId: '默认值'
}

export function homeReducers(state = initState, action: IAction): TYPES.IHomePageStoreState {
  const { type, payload } = action;
  switch (type) {
    case CONST.SYNC_DATA:
      console.log( 'home reducers', { ...state, syncId: payload.data } );
      return { ...state, syncId: payload.data };
    case CONST.ASYNC_DATA:
      console.log( 'home reducers', { ...state, syncId: payload.data } );
      return { ...state, asyncId: payload.data };
    default:
      return { ...state };
  }
}