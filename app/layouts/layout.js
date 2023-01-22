import TabGroup from "@/components/tab-group";
import { fetchCategories } from "@/data/categories";
import { Card, Grid } from "@nextui-org/react";

export default async function Layout({ children }) {
  const categories = await fetchCategories();
  console.log("🚀 ~ file: layout.js:7 ~ Layout ~ categories", categories)

  return (
    <Grid>
      <Card xs={8} bordered>
        {/* <TabGroup
          path="/layouts"
          items={[
            {
              text: "Home",
            },
            ...categories.map((x) => ({
              text: x.name,
              slug: x.slug,
            })),
          ]}
        /> */}
        {/* TODO!! здесь сделать подсказки с помощью next ui, какого уровня вложенности layout */}
        {/* <div>{children}</div> */}
      </Card>
    </Grid>
  );
}
