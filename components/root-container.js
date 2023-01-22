"use client";

import { Col, NextUIProvider } from "@nextui-org/react";
import { Container } from "@nextui-org/react";
import GlobalNav from "./global-nav";

export default function RootContainer({ children }) {
  return (
    <NextUIProvider>
      <Container>
        <Col span={2}>
          <GlobalNav />
        </Col>

        <Col span={10}>{children}</Col>
      </Container>
    </NextUIProvider>
  );
}
