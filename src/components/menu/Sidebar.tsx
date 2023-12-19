import * as React from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, {listItemButtonClasses} from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {closeSidebar} from '../../utils/sdieBarUtil';
import {useNavigate} from "react-router-dom";
import {Divider} from "@mui/joy";
import {MenuTypes} from "../../types/menuTypes";
import {menuData} from "../../utils/commonUits";

function Toggler({defaultExpanded = false, renderToggle, children,}: {
    defaultExpanded?: boolean;
    children: React.ReactNode;
    renderToggle: (params: { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => React.ReactNode;
}) {
    const [open, setOpen] = React.useState(defaultExpanded);
    return (
        <React.Fragment>
            {renderToggle({open, setOpen})}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateRows: open ? '1fr' : '0fr',
                    transition: '0.2s ease',
                    '& > *': {
                        overflow: 'hidden',
                    },
                }}
            >
                {children}
            </Box>
        </React.Fragment>
    );
}

/**
 * LeftMenu
 */
export default function Sidebar() {

    const navigate = useNavigate();

    const getMenuIcon = (menu: string) => {
        switch (menu) {
            case '홈' :
                return <HomeRoundedIcon/>
            case '로또' :
                return <CurrencyExchangeIcon/>
            case '공모주' :
                return <AccountBalanceIcon/>
            case '점심' :
               return <RestaurantIcon/>
            default :
                return <></>
        }
    }

    /**
     * Menu 렌더링 하는 함수
     * childMenu 존재 유무로 분기 처리함
     * @param menuItem
     * @param menuIndex
     */
    const renderMenu = (menuItem: MenuTypes, menuIndex: number) => {
        if (!menuItem.childMenu) {
            return (
                <ListItemButton onClick={() => {navigate(`${menuItem.url}`)}}>
                    {getMenuIcon(menuItem.menu)}
                    <ListItemContent>
                        <Typography level="title-lg">{menuItem.menu}</Typography>
                    </ListItemContent>
                </ListItemButton>
            )
        } else {
            return (
                <Toggler
                    renderToggle={({open, setOpen}) => (
                        <ListItemButton onClick={() => setOpen(!open)}>
                            {getMenuIcon(menuItem.menu)}
                            <ListItemContent>
                                <Typography level="title-lg">{menuItem.menu}</Typography>
                            </ListItemContent>
                            <KeyboardArrowDownIcon sx={{transform: open ? 'rotate(180deg)' : 'none'}}/>
                        </ListItemButton>
                    )}
                >
                    <List key={menuIndex} sx={{gap: 0.5}}>
                        {menuItem.childMenu.map((childItem, childIndex) => (
                            <ListItem key={childIndex}>
                                <ListItemButton onClick={() => {
                                    navigate(`${menuItem.childUrl && menuItem.childUrl[childIndex]}`)
                                }}>{childItem}</ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Toggler>
            )
        }
    }

    return (
        <Sheet
            className="Sidebar"
            sx={{
                position: {xs: 'fixed', md: 'sticky'},
                transform: {xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))', md: 'none'},
                transition: 'transform 0.4s, width 0.4s',
                zIndex: 10000,
                height: '100dvh',
                width: 'var(--Sidebar-width)',
                top: 0,
                p: 2,
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRight: '1px solid',
                borderColor: 'divider',
            }}
        >
            <GlobalStyles
                styles={(theme) => ({
                    ':root': {
                        '--Sidebar-width': '220px',
                        [theme.breakpoints.up('lg')]: {
                            '--Sidebar-width': '260px',
                        },
                    },
                })}
            />
            <Box
                className="Sidebar-overlay"
                sx={{
                    position: 'fixed',
                    zIndex: 9998,
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    opacity: 'var(--SideNavigation-slideIn)',
                    backgroundColor: 'var(--joy-palette-background-backdrop)',
                    transition: 'opacity 0.4s',
                    transform: {
                        xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
                        lg: 'translateX(-100%)',
                    },
                }}
                onClick={() => closeSidebar()}
            />
            <Box
                sx={{
                    minHeight: 0,
                    overflow: 'hidden auto',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    [`& .${listItemButtonClasses.root}`]: {
                        gap: 1.5,
                    },
                }}
            >
                <List
                    size="sm"
                    sx={{
                        gap: 1,
                        '--List-nestedInsetStart': '30px',
                        '--ListItem-radius': (theme) => theme.vars.radius.sm,
                    }}
                >
                    {menuData && menuData.map((menuItem, menuIndex) => (
                        <ListItem key={menuIndex} nested={!!menuItem.childMenu}>
                            {renderMenu(menuItem, menuIndex)}
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Divider/>
            <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
                <Box sx={{minWidth: 0, flex: 1}}>
                    <Typography level="h4" sx={{mb: '10px'}}>오늘의 한 줄</Typography>
                    <Typography level="title-md">행운은 눈이 멀지 않았다. 따라서 부지런하고 성실한 사람을 찾아간다. 앉아서 기다리는 사람에게는 영원히 찾아오지 않는다. 걷는
                        사람만이 앞으로 나아갈 수 있다. 노력하는 사람에게 행운이 찾아온다.</Typography>
                </Box>
            </Box>
        </Sheet>
    );
}
