import { useColorMode } from "@chakra-ui/core";
import { GetServerSideProps } from "next";
import Head from "next/head";
import DetailsTable from "../../components/DetailsTable";
import Layout from "../../components/Layout";
import NFO from "../../components/NFO";
import Proof from "../../components/Proof";
import RetailTable from "../../components/RetailTable";
import { API_BASE } from "../../utils/routes";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { _id } = context.params;
  const url = `${API_BASE}/api/data/details/_id/${_id}`;
  console.log("getting:", url);
  const res = await fetch(url);
  const data = await res.json();
  return { props: { data } };
};

const Release = ({ data }) => {
  const { colorMode } = useColorMode();

  const borderColor = { dark: "gray.700", light: "gray.300" };

  return (
    <Layout>
      <Head>
        <title>Release | {data.name}</title>
      </Head>
      <DetailsTable data={data} borderColor={borderColor[colorMode]} />

      <RetailTable data={data} borderColor={borderColor[colorMode]} />

      <Proof proof={true} />

      <NFO nfo={false} />

      <pre>{JSON.stringify(data, null, 3)}</pre>
    </Layout>
  );
};

export default Release;
