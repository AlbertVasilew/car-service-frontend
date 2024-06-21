import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import routerConfig from './configs/router-config';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={createBrowserRouter(routerConfig, { basename: "/car-service-frontend" })} />
    </React.StrictMode>
);