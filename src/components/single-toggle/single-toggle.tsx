interface ISingleToggle {
  type: "single" | "multiple";
  value: string;
  aria_label: string;
  name?: string;
  icon?: JSX.Element;
}

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function SingleToggle({
  type,
  value,
  aria_label,
  name,
  icon,
}: ISingleToggle) {
  return (
    <ToggleGroup type={type}>
      <ToggleGroupItem value={value} aria-label={aria_label}>
        {name ? name : icon}
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
