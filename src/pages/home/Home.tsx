import React, { FC } from 'react';
import { useIntl } from 'react-intl';

const Home: FC = () => {
    const intl = useIntl();
    return <div>{intl.formatMessage({ id: 'home.content' })}</div>;
};

export default Home;
