import {createContext, JSX, mergeProps, splitProps, useContext} from "solid-js";
import classNames from "./classnames";
import {useBootstrapPrefix} from "./ThemeProvider";
import {BsPrefixProps} from "./helpers";

export interface ProgressBarProps extends JSX.HTMLAttributes<HTMLDivElement>, BsPrefixProps {
  min?: number;
  now?: number;
  max?: number;
  label?: JSX.Element;
  visuallyHidden?: boolean;
  striped?: boolean;
  animated?: boolean;
  variant?: "success" | "danger" | "warning" | "info" | string;
}

const ProgressContext = createContext<{isStacked: boolean}>();

const ROUND_PRECISION = 1000;

const defaultProps = {
  min: 0,
  max: 100,
  animated: false,
  visuallyHidden: false,
  striped: false,
};

function getPercentage(now: number, min: number, max: number) {
  const percentage = ((now - min) / (max - min)) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}

function renderProgressBar(p: ProgressBarProps) {
  const [local, props] = splitProps(p, [
    "min",
    "now",
    "max",
    "label",
    "visuallyHidden",
    "striped",
    "animated",
    "className",
    "style",
    "variant",
    "bsPrefix",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "progress");

  return (
    <div
      {...props}
      role="progressbar"
      className={classNames(local.className, `${bsPrefix}-bar`, {
        [`bg-${local.variant}`]: local.variant,
        [`${bsPrefix}-bar-animated`]: local.animated,
        [`${bsPrefix}-bar-striped`]: local.animated || local.striped,
      })}
      style={{
        width: `${getPercentage(local.now!, local.min!, local.max!)}%`,
        ...(local.style as JSX.CSSProperties),
      }}
      aria-valuenow={local.now}
      aria-valuemin={local.min}
      aria-valuemax={local.max}
    >
      {local.visuallyHidden ? <span className="visually-hidden">{local.label}</span> : local.label}
    </div>
  );
}

const ProgressBar = (p: ProgressBarProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "children",
    "className",
    "bsPrefix",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "progress");
  const context = useContext(ProgressContext);

  let barProps = props;
  let wrapperProps: Partial<ProgressBarProps> = {};

  if (!context?.isStacked) {
    const [b, w] = splitProps(props, [
      "min",
      "now",
      "max",
      "label",
      "visuallyHidden",
      "striped",
      "animated",
      "variant",
    ]);
    barProps = b;
    wrapperProps = w;
  }

  return context?.isStacked ? (
    renderProgressBar(barProps)
  ) : (
    <ProgressContext.Provider value={{isStacked: true}}>
      <div {...wrapperProps} className={classNames(local.className, bsPrefix)}>
        {local.children ?? renderProgressBar(barProps)}
      </div>
    </ProgressContext.Provider>
  );
};

export default ProgressBar;
