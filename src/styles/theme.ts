import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        primaryColor: string;
        secondaryColor: string;
    }
}

export const globalTheme: DefaultTheme = {
    primaryColor: 'pink',
    secondaryColor: 'orange'
};

export const darkTheme: DefaultTheme = {
    primaryColor: 'red',
    secondaryColor: 'black'
};
