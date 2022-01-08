import {JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import {useBootstrapPrefix} from "./ThemeProvider";
import {createWithBsPrefix} from "./createWithBsPrefix";
import {divWithClassName} from "./divWithClassName";
import CardImg from "./CardImg";
import CardHeader from "./CardHeader";
import {BsPrefixProps, BsPrefixRefForwardingComponent} from "./helpers";
import {Color, Variant} from "./types";
import {Dynamic} from "solid-js/web";

const DivStyledAsH5 = divWithClassName("h5");
const DivStyledAsH6 = divWithClassName("h6");
const CardBody = createWithBsPrefix("card-body");
const CardTitle = createWithBsPrefix("card-title", {
  Component: DivStyledAsH5,
});
const CardSubtitle = createWithBsPrefix("card-subtitle", {
  Component: DivStyledAsH6,
});
const CardLink = createWithBsPrefix("card-link", {Component: "a"});
const CardText = createWithBsPrefix("card-text", {Component: "p"});
const CardFooter = createWithBsPrefix("card-footer");
const CardImgOverlay = createWithBsPrefix("card-img-overlay");

export interface CardProps extends BsPrefixProps, JSX.HTMLAttributes<HTMLElement> {
  bg?: Variant;
  text?: Color;
  border?: Variant;
  body?: boolean;
}

const defaultProps = {
  as: "div",
  body: false,
};

const Card: BsPrefixRefForwardingComponent<"div", CardProps> = (p: CardProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "className",
    "bg",
    "text",
    "border",
    "body",
    "children",
  ]);
  const prefix = useBootstrapPrefix(local.bsPrefix, "card");

  return (
    <Dynamic
      component={local.as}
      {...props}
      className={classNames(
        local.className,
        prefix,
        local.bg && `bg-${local.bg}`,
        local.text && `text-${local.text}`,
        local.border && `border-${local.border}`,
      )}
    >
      {local.body ? <CardBody>{local.children}</CardBody> : local.children}
    </Dynamic>
  );
};

export default Object.assign(Card, {
  Img: CardImg,
  Title: CardTitle,
  Subtitle: CardSubtitle,
  Body: CardBody,
  Link: CardLink,
  Text: CardText,
  Header: CardHeader,
  Footer: CardFooter,
  ImgOverlay: CardImgOverlay,
});
