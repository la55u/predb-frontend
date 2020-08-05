import { useColorMode } from "@chakra-ui/core";
import Head from "next/head";
import DetailsTable from "../../components/DetailsTable";
import Layout from "../../components/Layout";
import NFO from "../../components/NFO";
import RetailInfo_TV_TMDB from "../../components/RetailInfo_TV_TMDB";
import { API_BASE } from "../../utils/routes";

export const getServerSideProps = async (context) => {
  // release data
  const { _id } = context.params;
  const url = `${API_BASE}/api/data/details/_id/${_id}`;
  console.log("getting:", url);
  const res = await fetch(url);
  const data = await res.json();

  // retail data
  const retailRes = await fetch(
    `${API_BASE}/api/retail/tmdb/series/${data.name}`
  );
  let retailData = await retailRes.json();
  console.log("retailData:", retailData);
  retailData = !retailData.success ? null : retailData.data;

  return { props: { data, retailData } };
};

const Release = ({ retailData, data }) => {
  const { colorMode } = useColorMode();

  const borderColor = { dark: "gray.700", light: "gray.300" };

  return (
    <>
      <Head>
        <title>Release | {data.name}</title>
      </Head>

      <Layout>
        <DetailsTable data={data} borderColor={borderColor[colorMode]} />

        <RetailInfo_TV_TMDB
          data={retailData}
          borderColor={borderColor[colorMode]}
        />

        {/* <RetailTable data={retailData} borderColor={borderColor[colorMode]} /> */}

        {/* <Proof proof={false} /> */}

        <NFO nfo={true} borderColor={borderColor[colorMode]} />

        {/* <pre>{JSON.stringify(data, null, 3)}</pre> */}
      </Layout>
    </>
  );
};

export default Release;
