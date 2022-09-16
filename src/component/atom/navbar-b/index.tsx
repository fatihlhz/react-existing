import { Image } from '@mantine/core';
import { Navbar, Group, ScrollArea, createStyles, TextInput, Text } from '@mantine/core';
import {
  IconNotes,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconTruck,
  IconAccessible,
  IconAntennaBars4,
  IconMountain,
  IconDatabase,
  IconBuildingFactory,
  IconTools,
  IconSearch,
  IconFileReport
} from '@tabler/icons';
import { UserButton } from '../molecule/UserButton';
import { LinksGroup } from '../molecule/LinksGroup';

const mockdata = [
  { label: 'Field Management', icon: IconFileReport },
  {
    label: 'Production Data',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'String Data, Testflows and Chart - Gas', link: '/'},
      { label: 'String Data, Testflows and Chart - Oil', link: '/' },
    ],
  },
  {
    label: 'Field Potential',
    icon: IconAntennaBars4,
    links: [
      { label: 'Field Potential', link: '/' },
    ],
  },
  { label: 'Well & Completion', icon: IconPresentationAnalytics },
  { label: 'Well Operation', icon: IconFileAnalytics },
  { label: 'Geological', icon: IconMountain },
  { label: 'Data Acquisition', icon: IconDatabase },
  { 
    label: 'Facilities', 
    icon: IconBuildingFactory, 
    links: [
      { 
        label: 'Facility Inspection', 
        links: [
          { label: 'Well String Status', link: '/' },
        ] 
      },
    ]
  },
  { 
    label: 'Sand Management', 
    icon: IconTruck,
    links: [
      { label: 'Sand Mentoring', link: '/' },
    ]
  },
  { label: 'Toolbox', icon: IconTools },
  { label: 'Other', icon: IconAdjustments },
  { 
    label: 'Administrator', 
    icon: IconAccessible,
    links: [
      { label: 'Job Scheduler', link: '/' },
    ]
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

interface NavProps {
  open : boolean,
}

export function NavbarNested(props : NavProps) {
  let{ open } = props;
  const { classes } = useStyles();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <>
      <Navbar height={600} width={{ sm: 300 }} p="md" fixed={true} className={classes.navbar} hiddenBreakpoint="sm" hidden={!open}>
        <Navbar.Section className={classes.header}>
          <Group position="apart" mb={20}>
            <Image src='/phm-logo.ico' width={50} />
            <Text size={15} pr={8}>PERTAMINA DIRECT VIEWER</Text>
          </Group>
          <TextInput
            placeholder="Search"
            size="xs"
            rightSection={ <IconSearch size={14} /> }
            styles={{ rightSection: { pointerEvents: 'none' } }}
          />
        </Navbar.Section>

        <Navbar.Section grow className={classes.links} component={ScrollArea} mx="-xs" px="xs">
          <div className={classes.linksInner}>{links}</div>
        </Navbar.Section>

        <Navbar.Section className={classes.footer}>
          <UserButton
            image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
            name="Ann Nullpointer"
            email="anullpointer@yahoo.com"
          />
        </Navbar.Section>
      </Navbar>
    </>
  );
}
