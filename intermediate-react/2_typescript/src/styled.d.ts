import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        // 1-3. 테마가 어떻게 보일지 shape을 정의. 인터페이스임.
        //      -> styled-components의 테마 정의를 확장하는 것.
        textColor: string;
        bgColor: string;
        btnColor: string;
    }
}