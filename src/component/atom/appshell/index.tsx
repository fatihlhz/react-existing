import { useState } from 'react';
import {
  AppShell,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import { NavbarNested } from '../navbar-b';

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <MediaQuery largerThan="md" styles={{  }}>
          <NavbarNested open={opened} />
        </MediaQuery>
      }
      
      header={
        <Header height={70} p="md">
            <MediaQuery largerThan="sm" styles={{ display: 'none'}}>
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />

              <Text>Application header</Text>
            </div>
        </MediaQuery>
          </Header>
      }
     >
      
    </AppShell>
  );
}
