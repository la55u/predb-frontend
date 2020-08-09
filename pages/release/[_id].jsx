import { useColorMode } from "@chakra-ui/core";
import Head from "next/head";
import DetailsTable from "../../components/DetailsTable";
import Layout from "../../components/Layout";
import NFO from "../../components/NFO";
import RetailInfo_Movie_TMDB from "../../components/RetailInfo_Movie_TMDB";
import RetailInfo_TV_TMDB from "../../components/RetailInfo_TV_TMDB";
import { getSection } from "../../utils/classify";
import { API_BASE } from "../../utils/routes";

export const getServerSideProps = async (context) => {
  // fetch release data
  const { _id } = context.params;
  const url = `${API_BASE}/api/data/details/_id/${_id}`;
  console.log("getting:", url);
  const res = await fetch(url);
  const data = await res.json();

  // fetch retail data
  const category = getSection(data.name, data.section).includes("TV")
    ? "series"
    : "movie";
  const retailUrl = `${API_BASE}/api/retail/tmdb/${category}/${data.name}`;
  const retailRes = await fetch(retailUrl);
  let retailData = await retailRes.json();
  console.log("retailData:", retailData);
  retailData = !retailData.success ? null : retailData.data;

  return { props: { data, retailData, category } };
};

const Release = ({ retailData, data, category }) => {
  const { colorMode } = useColorMode();

  const borderColor = { dark: "gray.700", light: "gray.300" };

  return (
    <>
      <Head>
        <title>Release | {data.name}</title>
      </Head>

      <Layout>
        <DetailsTable data={data} borderColor={borderColor[colorMode]} />

        {category === "series" && (
          <RetailInfo_TV_TMDB
            data={retailData}
            borderColor={borderColor[colorMode]}
          />
        )}

        {category === "movie" && (
          <RetailInfo_Movie_TMDB
            data={retailData}
            borderColor={borderColor[colorMode]}
          />
        )}

        {/* <RetailTable data={retailData} borderColor={borderColor[colorMode]} /> */}

        {/* <Proof proof={false} /> */}

        <NFO data={data} borderColor={borderColor[colorMode]} />

        {/* <pre>{JSON.stringify(data, null, 3)}</pre> */}
      </Layout>
    </>
  );
};

export default Release;
