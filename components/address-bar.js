"use client";

import { Card, Grid, Row, Text } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { FaRoute } from "react-icons/fa";

export default function AddressBar() {
  const pathname = usePathname();

  const styleOptions = {
    textGradient: "45deg, $blue600 -20%, $pink600 50%",
    marginLeft: "10px",
  };

  const iconStyle = { color: "var(--nextui-colors-blue600)" };

  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={8}>
        <Card>
          <Card.Body>
            <Row>
              <FaRoute style={iconStyle} />

              <Text h6 weight="bold" css={styleOptions}>
                YuShato.com
              </Text>
              {pathname ? (
                <>
                  <Text css={styleOptions}>|</Text>
                  {pathname
                    .split("/")
                    .slice(2)
                    .map((segment) => {
                      return (
                        <Text key={segment} css={styleOptions}>
                          <span>
                            <span key={segment}>{segment}</span>
                          </span>

                          <Text css={styleOptions}>|</Text>
                        </Text>
                      );
                    })}
                </>
              ) : null}
            </Row>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
}
