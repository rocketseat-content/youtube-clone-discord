import React from 'react';

import {
    Container,
    SearchBar,
    SearchIcon,
    ButtonsContainer,
    NotificationContainer,
    InboxIcon,
    HelpIcon
} from './styles';

export interface Props {
    hasNotifications?: boolean;
};

const TopMenu: React.FC<Props> = ({ hasNotifications }) => {
    hasNotifications = true;

    return (
        <Container>
            <SearchBar>
                Search
                <SearchIcon />
            </SearchBar>

            <ButtonsContainer>
                <NotificationContainer hasNotifications={hasNotifications} >
                    <InboxIcon />
                </NotificationContainer>
                {/* <InboxIcon className={hasNotifications ? 'notification' : ''} /> */}
                <HelpIcon />
            </ButtonsContainer>
        </Container>
    )
};

export default TopMenu;
