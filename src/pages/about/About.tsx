import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import styled from 'styled-components';

interface IWrapper {
    primary?: boolean;
}

const About: FC = () => {
    const intl = useIntl();
    return (
        <>
            <Wrapper primary>{intl.formatMessage({ id: 'about.content' })}</Wrapper>
            <Wrapper>{intl.formatMessage({ id: 'about.content' })}</Wrapper>
        </>
    );
};

const Wrapper = styled.section<IWrapper>`
    color: ${({ theme }) => theme.primaryColor};
    background-color: ${props => (props.primary ? 'yellow' : 'black')};
    border: 1px solid violet;
`;

export default About;
