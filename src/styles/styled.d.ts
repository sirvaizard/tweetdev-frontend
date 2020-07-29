import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      buttonText: string;
      buttonColor: string;
      buttonShadow: string;
      tweetColor: string;
      bracesColor: string;
      devColor: string;
      formColor: string;
      signupText: string;
      infoColor: string;
      menuItem: string;
      menuItemActive: string;
      menuItemHover: string;
      newPostShadow: string;
      mainColor: string;
    }
  }
}