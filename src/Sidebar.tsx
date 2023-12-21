import React, { useState } from 'react';
import { HeaderGlobalAction, HeaderPanel, Toggle } from '@carbon/react';

export const Sidebar = ({ children, icon, type }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <HeaderGlobalAction
        aria-label={`Open ${type} sidebar`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {icon}
      </HeaderGlobalAction>
      <HeaderPanel aria-label={`${type} sidebar`} expanded={isSidebarOpen}>
        {children}
      </HeaderPanel>
    </>
  );
};
