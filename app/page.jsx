"use client";

import AddressBar from "@/components/address-bar";
import MainContainer from "@/components/main-content";
import { demos } from "@/data/demos";
import { NextUIProvider } from "@nextui-org/react";
import {
  Container,
  Card,
  Row,
  Text,
  Col,
  Link,
  Spacer,
} from "@nextui-org/react";

export default function Page() {
  return (
    <>
      <AddressBar />

      <MainContainer />
    </>
  );
}
