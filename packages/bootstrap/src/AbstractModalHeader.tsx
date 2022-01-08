import {JSX, mergeProps, splitProps, useContext} from "solid-js";
import CloseButton, {CloseButtonVariant} from "./CloseButton";
import ModalContext from "./ModalContext";

export interface AbstractModalHeaderProps extends JSX.HTMLAttributes<HTMLDivElement> {
  closeLabel?: string;
  closeVariant?: CloseButtonVariant;
  closeButton?: boolean;
  onHide?: () => void;
}

const defaultProps = {
  closeLabel: "Close",
  closeButton: false,
};

const AbstractModalHeader = (p: AbstractModalHeaderProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "closeLabel",
    "closeVariant",
    "closeButton",
    "onHide",
    "children",
  ]);
  const context = useContext(ModalContext);

  const handleClick = () => {
    context?.onHide();
    local.onHide?.();
  };

  return (
    <div {...props}>
      {local.children}

      {local.closeButton && (
        <CloseButton
          aria-label={local.closeLabel}
          variant={local.closeVariant}
          onClick={handleClick}
        />
      )}
    </div>
  );
};

export default AbstractModalHeader;
