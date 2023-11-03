import React, { SVGProps, VFC } from 'react';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import { getRouteAbout, getRouteMain, getRouteProfile } from 'shared/const/router';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: getRouteMain(),
        Icon: MainIcon,
        text: 'Главная',
    },
    {
        path: getRouteAbout(),
        Icon: AboutIcon,
        text: 'О сайте',
    },
    {
        path: getRouteProfile(),
        Icon: ProfileIcon,
        text: 'Профиль',
    },
];
