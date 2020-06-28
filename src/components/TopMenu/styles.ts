import styled from 'styled-components';
import { Search, Inbox, Help } from 'styled-icons/material';

import { Props } from '.';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    /*padding: 0 24px 0 0;*/

    background-color: var(--primary);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    z-index: 2;

    /*~ svg {
        margin: 0 auto 0 0;
    }*/
`;

export const SearchBar = styled.h1`
    width: 144px;
    height: 24px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;

    padding: 0 6px;

    font-size: 14px;
    font-weight: 500;

    color: var(--text-muted);
    background-color: var(--tertiary);
    border-radius: 4px;

    cursor: text;
`;

export const SearchIcon = styled(Search)`
    width: 18px;
    height: 18px;

    color: var(--text-muted);
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
`;

export const NotificationContainer = styled.div<Props>`
    /* In caso some other place would have notifications,
    this could be created as a new component */
    position: relative;

    &::after {
    /*&.notification {*/
        background-color: var(--notification);
        width: 1px;
        height: 10px;

        padding: 0 4px;

        position: absolute;
        bottom: 2px;
        right: 2px;

        border-radius: 50%;
        /*border: 4px solid var(--quarternary);*/

        content: '';
        display: ${props => props.hasNotifications ? 'inline' : 'none'};
    }
`;

export const InboxIcon = styled(Inbox)`
    width: 24px;
    height: 24px;

    color: var(--interactive-normal);
    cursor: pointer;

    &:hover {
        color: var(--interactive-hover);
    }
`;

export const HelpIcon = styled(Help)`
    width: 24px;
    height: 24px;

    color: var(--interactive-normal);
    cursor: pointer;

    &:hover {
        color: var(--interactive-hover);
    }
`;
