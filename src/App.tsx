import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import { setUserId } from '@/store/userSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { generateRandomUniqueId } from '@/services';

import type { RootState } from '@/store';

import router from './router';

const App = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.user);

  useEffect(() => {
    if (user.visitorId) return;

    const visitorId: string = generateRandomUniqueId();

    dispatch(setUserId({ visitorId }));
  }, [dispatch, user]);

  return <RouterProvider router={router} />;
};

export default App;
