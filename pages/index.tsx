import Head from "next/head";

// components
import { FoodIndex } from "../modules/food/index";
import { JobIndex } from "../modules/job/index";
import { PayIndex } from "../modules/pay/index";
import { RecipesIndex } from "../modules/recipes/index";

// style
import { MainSection, Section } from "../styles/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainSection>
        <Section>
          <PayIndex />
          <FoodIndex />
          <RecipesIndex />
          <JobIndex />
        </Section>
      </MainSection>

      <footer></footer>
    </>
  );
}
