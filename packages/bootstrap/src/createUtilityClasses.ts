import {DEFAULT_BREAKPOINTS} from "./ThemeProvider";

export type ResponsiveUtilityValue<T> =
  | T
  | {
      xs?: T;
      sm?: T;
      md?: T;
      lg?: T;
      xl?: T;
      xxl?: T;
    };

export const DEVICE_SIZES = ["xxl", "xl", "lg", "md", "sm", "xs"] as const;

export default function createUtilityClass(
  utilityValues: Record<string, ResponsiveUtilityValue<unknown>>,
  breakpoints = DEFAULT_BREAKPOINTS,
) {
  const classes: string[] = [];
  Object.entries(utilityValues).forEach(([utilName, utilValue]) => {
    if (utilValue != null) {
      if (typeof utilValue === "object") {
        breakpoints.forEach((brkPoint) => {
          // @ts-ignore
          const bpValue = utilValue![brkPoint];
          if (bpValue != null) {
            const infix = brkPoint !== "xs" ? `-${brkPoint}` : "";
            classes.push(`${utilName}${infix}-${bpValue}`);
          }
        });
      } else {
        classes.push(`${utilName}-${utilValue}`);
      }
    }
  });

  return classes;
}
