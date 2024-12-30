import { Routes as ReactRouterRoutes, Route } from 'react-router';
import { routes } from './routes';

const Routes = () => {
  return (
    <ReactRouterRoutes>
      {' '}
      {routes.map((route) => (
        <Route path={route.path} key={route.key} element={route.element}>
          {' '}
          {route.children &&
            route.children.map((child) => (
              <Route
                key={child.key}
                path={child.path}
                element={child.element}
                index={child.index}
              />
            ))}{' '}
        </Route>
      ))}{' '}
    </ReactRouterRoutes>
  );
};

export default Routes;
