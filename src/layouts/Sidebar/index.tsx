import React from 'react'
import { useHistory } from 'react-router-dom';
import { useAppSelector } from "store/hooks";
import { RootState } from "store/store";
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { sidebaropen } from 'store/modules/sidebar';
import { useState, useEffect } from 'react';

const drawerWidth = 160;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  top: 87.5,
  height: 532,
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  top: 87.5,
  height: 532,
  overflowX: 'hidden',
  width: `calc(${theme.spacing(5)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(5)} + 1px)`,
  },
});


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const AdminSidebar = (responsive : any) => {
  const history = useHistory();
  
  return (
    <div>
        <Drawer variant="permanent" open={responsive.responsive}>
        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: responsive.responsive ? 'initial' : 'center',
                px: 2.5,
              }}
              onClick={() => history.push('/')}
            >
              <ListItemIcon style={{minWidth:"28px"}}>
                <i className="bi bi-people-fill" />
              </ListItemIcon>
              <ListItemText primary={"All Reports"} sx={{ opacity: responsive.responsive ? 1 : 0 }} style={{color:"#646363",paddingTop:"1px"}} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: responsive.responsive ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon style={{minWidth:"28px"}}>
              <i className="bi bi-wallet-fill" />
              </ListItemIcon>
              <ListItemText primary={"Pay amount"} sx={{ opacity: responsive.responsive ? 1 : 0 }} style={{color:"#646363",paddingTop:"1px"}} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}

const VisitorSidebar = (responsive : any) => {
  const theme = useTheme();
    
  const history = useHistory();
  return (
    <div>
      <Drawer variant="permanent" open={responsive.responsive}>
        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: responsive.responsive ? 'initial' : 'center',
                px: 2.5,
              }}
              onClick={() => history.push('/')}
            >
              <ListItemIcon style={{minWidth:"28px"}}>
                <i className="bi bi-people-fill" />
              </ListItemIcon>
              <ListItemText primary={"All Reports"} sx={{ opacity: responsive.responsive ? 1 : 0 }} style={{color:"#646363",paddingTop:"1px"}} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: responsive.responsive ? 'initial' : 'center',
                px: 2.5,
              }}
              onClick={() => history.push('/daily')}
            >
              <ListItemIcon style={{minWidth:"28px"}}>
              <i className="bi bi-stickies-fill" />
              </ListItemIcon>
              <ListItemText primary={"Daily report"} sx={{ opacity: responsive.responsive ? 1 : 0 }} style={{color:"#646363",paddingTop:"1px"}} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: responsive.responsive ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon style={{minWidth:"28px"}}>
              <i className="bi bi-wallet-fill" />
              </ListItemIcon>
              <ListItemText primary={"Pay amount"} sx={{ opacity: responsive.responsive ? 1 : 0 }} style={{color:"#646363",paddingTop:"1px"}} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}



function Sidebar() {
    
    const user = useAppSelector((state: RootState) => state.auth.user);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [openstate,setOpenstate] = useState(true);
    const opningstate = useAppSelector(sidebaropen);

    useEffect(() => {
      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleWindowResize);
  
      
      if(window.innerWidth>885) {
        setOpenstate(true)
      } else if (window.innerWidth === 885) {
        setOpenstate(false)
      } else {
        setOpenstate(opningstate)
      }
      
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, [window.innerWidth, opningstate]);

    return (
        <div className="flex-column navcontent">
          {user?.roll === "Admin" && <AdminSidebar responsive={openstate}/>}
          {user?.roll === "Visitor" && <VisitorSidebar responsive={openstate}/>}  
        </div>
    )
}

export default Sidebar;