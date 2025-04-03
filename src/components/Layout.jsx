import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white dark:bg-dark text-gray-900 dark:text-gray-100">
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default Layout;