"use client";

import Layout from "@/app/layouts/layout";
import { Card, Grid, Row, Text } from "@nextui-org/react";

export default function MainContainer({ children }) {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={8}>
        <Card>
          <Card.Body>
            <Row>
             {/*  */}
            </Row>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
}
