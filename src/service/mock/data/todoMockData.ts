import { TodoType } from 'model/todoGeneral';

export const todoMockData: TodoType[] = [
  {
    id: 'todoMockId1',
    todo: 'todoMockTask1',
    isChecked: false,
  },
  {
    id: 'todoMockId2',
    todo: 'todoMockTask2',
    isChecked: false,
  },
];

export const selectedIdListMockData: string[] = ['cat', 'dog', 'horse'];
export const selectedIdListMockDataForUpdateTesting: string[] = [
  'todoMockId1',
  'todoMockId2',
];
