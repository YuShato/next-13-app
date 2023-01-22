"use client";

import { demos } from "@/data/demos";

import { Text, Col, Link, Spacer, Row } from "@nextui-org/react";

export default function GlobalNav() {
  return (
    <>
      <Row>
        <Text h3>Next 13, 2023</Text>
      </Row>

      <Spacer />

      {demos.map((section) => {
        return (
          <Col key={section.name}>
            <Text>{section.name}</Text>

            {section.items.map((item) => {
              return (
                <Link
                  block
                  color="primary"
                  href={`/${item.slug}`}
                  key={item.name}
                >
                  {item.name}
                </Link>
              );
            })}
            <Spacer />
          </Col>
        );
      })}
    </>
  );
}
