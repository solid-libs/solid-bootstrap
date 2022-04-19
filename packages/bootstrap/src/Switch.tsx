import FormCheck, {FormCheckProps} from "./FormCheck";
import {BsPrefixRefForwardingComponent} from "./helpers";

type SwitchProps = Omit<FormCheckProps, "type">;

const Switch: BsPrefixRefForwardingComponent<typeof FormCheck, SwitchProps> = (
  props: SwitchProps,
) => (
  <FormCheck {...props} type="switch"/>
);

export default Object.assign(Switch, {
  Input: FormCheck.Input,
  Label: FormCheck.Label,
});
