import React, {useState, useEffect} from 'react'
import { Row, Col, Button } from "react-bootstrap";
import AsyncLocalStorage from "@createnextapp/async-local-storage";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { signout } from "store/modules/auth";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { sidebaropening, sidebaropen } from 'store/modules/sidebar';

function Header() {
    const dispatch = useAppDispatch(); 
    const opningstate = useAppSelector(sidebaropen);

    const [userName, setUserName] = useState('');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [cssprop, setCssprop] = useState("block");
    const [csspropdraw, setCsspropdraw] = useState("none");

    const init = async () => {
        const user = await AsyncLocalStorage.getItem("username");
        setUserName(user);
    };

    const handleOpen = () => {
        dispatch(sidebaropening(!opningstate))
    }
    const handleLoginOut = () => {
        dispatch(signout()).then(() => 
            window.location.reload()
        );
    };

    useEffect(() => {
        init();    
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleWindowResize);
        if(window.innerWidth<=1055) {
            setCssprop("none");
        } else {
          setCssprop("block");
        }
        if(window.innerWidth<=885) {
            setCsspropdraw("block");
        } else {
            setCsspropdraw("none");
        }
    }, [window.innerWidth])

    return (
        <Row className="header">
            <Col className="logocontent">
            <div>
                <img className="logoiimg" src="logo.png" width={90} height={42} alt="It's logos"/>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleOpen}
                    edge="start"
                    style={{marginTop:"5px", marginLeft:"7px"}}
                >
                    <MenuIcon style={{display:csspropdraw}}/>
                </IconButton>
            </div>
            <div className="logotext" style={{display:cssprop}}>
                <h3>{userName}, Welcome to BY2!</h3>
            </div>
            </Col>
            <Col className="exheader">
            <div className="logoutcontent">
                <Button
                type="button"
                variant="outline-primary"
                onClick={handleLoginOut}
                className="logoutbtn"
                >
                Signout
                </Button>
            </div>
            </Col>
      </Row>
    )
}

export default Header;