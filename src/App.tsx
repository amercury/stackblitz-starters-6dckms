import React from 'react';

import {
  Header,
  HeaderGlobalBar,
  HeaderName,
  Switcher,
  SwitcherItem,
} from '@carbon/react';
import { UserAvatar } from '@carbon/icons-react';

import { Sidebar } from './Sidebar';

export function App() {
  return (
    <div>
      <Header aria-label="Page header">
        <HeaderName prefix="Example">
          <span>App</span>
        </HeaderName>
        <HeaderGlobalBar>
          <Sidebar icon={<UserAvatar size={20} />} type="user">
            <Switcher aria-label="Switcher">
              {[
                <SwitcherItem
                  key={1}
                  aria-label="Text1"
                  onClick={() => console.log('onClick handler 1')}
                >
                  Text1
                </SwitcherItem>,
                <SwitcherItem
                  key={2}
                  aria-label="Text2"
                  onClick={() => console.log('onClick handler 2')}
                >
                  Text2
                </SwitcherItem>,
              ]}
            </Switcher>
          </Sidebar>
        </HeaderGlobalBar>
      </Header>
    </div>
  );
}
