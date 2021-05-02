import React, { ReactNode, FC } from 'react';
import { IntlProvider } from 'react-intl';
import { appLang, messages } from '../../translations';

type IntlProps = {
    children?: ReactNode;
};

export const intlWrapper: FC = ({ children }: IntlProps) => (
    <IntlProvider locale={appLang} messages={messages[appLang]}>
        {children}
    </IntlProvider>
);
