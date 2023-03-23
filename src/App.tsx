import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { setUserId } from '@/store/userSlice';
import { requestUserData } from '@/services';
import { getLocalDateString, generateRandomUniqueId } from '@/utils';

import type { RootState } from '@/store';

import router from './router';

const App = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.user);

  useEffect(() => {
    const landingAt = getLocalDateString();

    if (user.visitorId) {
      const { visitorId } = user;

      requestUserData('/landing', {
        visitorId,
        landingAt,
        newVisitor: 'FALSE',
      });
      return;
    }

    const visitorId: string = generateRandomUniqueId();

    dispatch(setUserId({ visitorId }));
    requestUserData('/landing', {
      visitorId,
      landingAt,
      newVisitor: 'TRUE',
    });
  }, [dispatch, user]);

  return <RouterProvider router={router} />;
};

export default App;
