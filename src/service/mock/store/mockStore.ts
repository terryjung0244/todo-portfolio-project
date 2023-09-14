import configureStore from 'redux-mock-store';
import { Store } from '@reduxjs/toolkit';
import { RootState } from 'store';

export const createMockStore = (mockState: Partial<RootState>): Store => {
  const mockStore = configureStore([]);
  const store = mockStore(mockState);
  return store;
};

// 실제 store을 base로 한, test을 위한 가상 store 만들기
// Partial<RootState> 타입을, 실제로 사용하는곳에서 가져온다.
// 가짜 store에서 type-> Partial<RootState>로 사용한다.
