import {
  Page,
  Layout,
  Form,
  BlockStack,
  TextField,
  Select, Button, Card,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return null;
};

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
}


export default function Index() {
  const submit = () => console.log("submit");

  return (
    <Page>
      <TitleBar title="Add a product to the shop"></TitleBar>
        <Layout>
          <Layout.Section variant={'oneThird'}>
            <Card padding="800" background={'bg-fill-magic-secondary-active'}>
              <Form onSubmit={submit}>
                <BlockStack gap="300">
                  <TextField requiredIndicator={true} autoComplete={"off"} label={"Name of the product"}></TextField>
                  <TextField requiredIndicator={true} autoComplete={"off"} label={"Price"}></TextField>
                  <TextField autoComplete={"off"} label={"Image"}></TextField>
                  <TextField requiredIndicator={true} autoComplete={"off"} label={"Description"}></TextField>
                  <Select requiredIndicator={true} label={"Collection"}></Select>
                  <Button submit={true}>Add product</Button>
                </BlockStack>
              </Form>
            </Card>
          </Layout.Section>
        </Layout>
    </Page>
  );
}
