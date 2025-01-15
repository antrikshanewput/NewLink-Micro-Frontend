import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';
import * as _chakra_ui_react from '@chakra-ui/react';

interface NavDrawerProps {
    menuList: Array<{
        menuItemProps: {
            to?: string;
            as?: React.ElementType;
            onClick?: () => void;
        };
        title: string;
        description?: string;
        order: number;
    }>;
    HeaderLogo: React.ElementType;
    isOpen: boolean;
    onClose: () => void;
    handleClose: () => void;
    hederaAccountId: string;
    btnRef?: React.RefObject<any>;
    styling?: object;
    [key: string]: any;
}

declare function DrawerComponent({ props }: NavDrawerProps): react_jsx_runtime.JSX.Element;

declare const system: _chakra_ui_react.SystemContext;

interface NavBarProps {
    menuList?: Array<{
        menuItemProps: {
            to?: string;
            as?: React.ElementType;
            onClick?: () => void;
        };
        title: string;
        description?: string;
        order: number;
    }>;
    HeaderLogo?: any;
    isOpen?: boolean;
    onClose?: () => void;
    handleClose?: () => void;
    hederaAccountId?: string;
    btnRef?: React.RefObject<any>;
    styling?: object;
    [key: string]: any;
}
declare function TopBarComponent(props: NavBarProps): react_jsx_runtime.JSX.Element;

export { DrawerComponent as SidebarDrawer, TopBarComponent as TopBar, system as chakraTheme };
