import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      nav: string;
      "background-main": string;
      primary: string;
    };
  }
}
