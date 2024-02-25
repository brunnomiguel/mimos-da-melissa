import { colors } from "@/styles/colors";
import { IconType } from "react-icons";

export function NavOptionIcon({ icon: Icon }: { icon: IconType }) {
  return (
    <div>
      <Icon size="2rem" color={colors.text[900]} />
    </div>
  );
}
