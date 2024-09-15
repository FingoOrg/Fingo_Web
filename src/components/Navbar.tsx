import { NavLink } from 'react-router-dom';
import { Route } from '../constants/types';
const Navbar = () => {
  const routes: Route[] = [
    {
      name: 'Home',
      path: '/',
      icon: 'fi fi-rr-home',
    },
    {
      name: 'Road',
      path: '/road',
      icon: 'fi fi-rr-road',
    },
    {
      name: 'Chat',
      path: '/chat',
      icon: 'fi fi-rr-comment',
    },
    {
      name: 'Profile',
      path: '/profile',
      icon: 'fi fi-rr-user',
    },
  ];

  return (
    <nav className="flex items-center h-[10dvh] justify-between rounded-t-3xl p-4 bg-white shadow-inner-lg space-x-8">
      {routes.map((route, index) => (
        <NavLink
          key={index}
          to={route.path}
          className={({ isActive }) =>
            `${isActive ? 'text-accent -translate-y-4 p-4 shadow-inner-lg' : 'text-gray-400 p-2'} bg-white rounded-full flex flex-col items-center justify-center transition-all delay-75 mx-2 text-lg font-semibold hover:text-accent/80`
          }
        >
          <>
            <i className={`${route.icon} text-2xl m-0 p-0 leading-[0px]`} />
            <p className="text-sm mt-1">{route.name}</p>
          </>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
