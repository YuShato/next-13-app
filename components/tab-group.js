import { Button } from "@nextui-org/react";
import Tab from "./tab";

export default function TabGroup({ path, items }) {
  return (
    <Button.Group color="primary" light>
      {items.map((item) => (
        <Tab key={path + item.slug} item={item} path={path} />
      ))}
    </Button.Group>
  );
}
