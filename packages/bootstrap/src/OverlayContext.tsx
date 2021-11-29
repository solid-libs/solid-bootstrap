import { createContext } from "solid-js";
import {
  OverlayArrowProps,
  OverlayInjectedProps,
  OverlayMetadata,
} from "solid-bootstrap-core/Overlay";

export interface OverlayContextType {
  wrapperProps: OverlayInjectedProps;
  arrowProps: Partial<OverlayArrowProps>;
  metadata: OverlayMetadata;
}

const OverlayContext = createContext<OverlayContextType>();

export default OverlayContext;
