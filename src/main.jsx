import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import 'normalize.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css';
import './main.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage';
import TeacherModal from './components/Teachers/TeacherModal/TeacherModal';
import store from './store/store';
import { Provider } from 'react-redux';
import MoreCourses from './components/Courses/MoreCourses/MoreCourses';
import { COURSES_PATH, TEACHERS_PATH } from './constants/paths';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: TEACHERS_PATH,
        children: [{ path: ':teacherId', element: <TeacherModal /> }],
      },
      {
        path: COURSES_PATH,
        children: [{ path: ':courseId', element: <MoreCourses /> }],
      },
    ],
  },
  {basename: process.env.NODE_ENV === 'production' ? '/mirintel/' : '/'}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
