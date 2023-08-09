import { brandColors } from "./hubBrand";

export const textColors = {
    onLight: {
        action: brandColors.primary.low,
        actionHover: brandColors.primary.dark,
        actionDisable: brandColors.primary.main,
    },
    onDark: {
        action: brandColors.primary.high,
        actionHover: brandColors.primary.light,
        actionDisable: brandColors.primary.main,
    },
    onPrimary: {
        action: brandColors.primary.light,
        actionHover: brandColors.primary.light,
        actionDisable: brandColors.primary.main,
    },
    onAccent: {
        action: brandColors.accent.light,
        actionHover: brandColors.primary.light,
        actionDisable: brandColors.accent.low,
    },
}

export const backgroundColors = {
    primary: brandColors.primary.high,
    primarySubtle: brandColors.primary.light,

    action: brandColors.primary.main,
    actionHover: brandColors.primary.high,
    actionPress: brandColors.primary.low,
    actionDisable: brandColors.primary.dark,
}

export const borderColors = {
    //revere cores
    action: brandColors.primary.main,
    actionHover: brandColors.primary.high,
    actionPress: brandColors.primary.low,
    actionDisable: brandColors.primary.dark,
}

export const iconColors = {
    //revere cores
    action: brandColors.primary.main,
    actionHover: brandColors.primary.high,
    actionPress: brandColors.primary.low,
    actionDisable: brandColors.primary.dark,
}