import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { Home, Video, Main } from '@/pages';
import { Layout } from '@/components';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/video" element={<Video />} />
      <Route path="/main" element={<Main />} />
      <Route path="/*" element={<Home />} />
    </Route>
  )
);

export default router;
