import { Text, TextProps } from "./Themed";

export function PoppinText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "PoppinRegular" }]} />
  );
}

export function PoppinBoldText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "PoppinBold" }]} />
  );
}

export function PromptText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "PromptRegular" }]} />
  );
}

export function PromptBoldText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "PromptBold" }]} />
  );
}
