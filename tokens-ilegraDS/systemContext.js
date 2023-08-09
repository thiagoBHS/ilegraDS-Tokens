import { colors } from "./primitiveColors";

export const spacing = {
    quarck: "4px",
    nano: "8px",
    threeQuarck: "12px",
    xxxs: "16px",
    xxs: "24px",
    xs: "32px",
    sm: "40px",
    md: "48px",
    xl: "64px",
    xxl: "80px",
    xxxl: "120px",
};

export const borderRadius = {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    pill: "500px",
};

export const borderWidth = {
    regular: "2px",
    thick: "4px",
};

export const boxShadow = {
    low: `box-shadow: 0px 2px 8px 0px rgba(0, 67, 152, 0.08), 0px 1px 2px 0px rgba(0, 26, 67, 0.06);
    `,
    medium: `box-shadow: 0px 3px 24px 2px rgba(0, 67, 152, 0.08), 0px 1px 4px 0px rgba(0, 26, 67, 0.08);
    `,
    high: `box-shadow: 0px 10px 24px 4px rgba(0, 89, 199, 0.16), 0px 4px 6px 0px rgba(0, 26, 67, 0.20);
    `,
};

export const opacity = {
    semiOpaque: 0.96,
    superIntense: 0.8,
    intense: 0.72,
    medium: 0.64,
    light: 0.32,
    superLight: 0.16,
    semiTransparent: 0.08,
};

export const fontFamilies = {
    text: "'Noto Sans', sans-serif",
    display: "'Helvetica Neue', sans-serif",
};

export const fontSize = {
    xxs: "10px",
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "24px",
    xxl: "32px",
};

export const lineHeight = {
    xs: "12px",
    md: "16px",
    lg: "20px",
    xl: "24px",
    xxl: "32px"
};

export const fontWeight = {
    light: "light",
    regular: "regular",
    medium: "medium",
    bold: "bold",
};

export const textColors = {
    onLight: {
        text: colors.neutral10,
        sucess: colors.green30,
        danger: colors.yellow30,
        error: colors.red30,
    },
    onDark: {
        text: colors.neutral100,
        sucess: colors.green30,
        danger: colors.yellow30,
        error: colors.red30,
    },
    onPrimary: {
        text: colors.neutral95,
    },
    onAccent: {
        text: colors.neutral20,
    },
};

export const backgroundColors = {
    main: colors.neutral100,
    low: colors.neutral95,
    dark: colors.neutral90, //Pode confundir?

    success: colors.green60,
    successSubtle: colors.green95,
    
    warning: colors.yellow30,
    warningSubtle: colors.yellow80,
    
    error: colors.red60,
    errorsubtle: colors.red90,

    app: colors.neutral95,
    card: colors.neutral100,
};

export const borderColors = {
    main: colors.neutral95,
    low: colors.neutral90,

    success: colors.green60,
    successSubtle: colors.green95,

    warning: colors.yellow50,
    warningSubtle: colors.yellow80,

    error: colors.red60,
    errorSubtle: colors.red90,
};

export const iconColors = {
    main: colors.neutral60,
    light: colors.neutral95,
    
    success: colors.green60,
    successSubtle: colors.green95,
    
    warning: colors.yellow30,
    warningSubtle: colors.yellow70,
    
    error: colors.red60,
    errorSubtle: colors.red90,
};