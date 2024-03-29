import {JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import {useBootstrapPrefix} from "./ThemeProvider";
import {createWithBsPrefix} from "./createWithBsPrefix";
import {divWithClass} from "./divWithClass";
import CardImg from "./CardImg";
import CardHeader from "./CardHeader";
import {BsPrefixProps, BsPrefixRefForwardingComponent} from "./helpers";
import {Color, Variant} from "./types";
import {Dynamic} from "solid-js/web";

const DivStyledAsH5 = divWithClass("h5");
const DivStyledAsH6 = divWithClass("h6");
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
    "class",
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
      class={classNames(
        local.class,
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
