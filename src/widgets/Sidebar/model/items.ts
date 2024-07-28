import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
    path: string;
    text: string;
    icon?: string;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    { path: RoutePath.main, text: 'Home' },
    { path: RoutePath.about, text: 'About' },
    { path: RoutePath.profile, text: 'Profile', authOnly: true },
];
