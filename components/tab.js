import { Button, Link } from "@nextui-org/react";

export default function Tab({ path, item }) {
  const { slug, text } = item;
  const segment = useSelectedLayoutSegment();
  const href = slug ? path + "/" + slug : path;
  const isActive =
    // Example home pages e.g. `/layouts`
    (!slug && segment === null) ||
    // Nested pages e.g. `/layouts/electronics`
    segment === slug;

  return (
    <Button
      as={"a"}
      href={href}
      color="primary"
      ghost={isActive}
      auto
      aria-label="change directory"
    >
      {text}
    </Button>
  );
}
