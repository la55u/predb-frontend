import { useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DetailsTable from "../../components/DetailsTable";
import Layout from "../../components/Layout";
import NFO from "../../components/NFO";
import RetailInfo_Movie_TMDB from "../../components/RetailInfo_Movie_TMDB";
import RetailInfo_TV_TMDB from "../../components/RetailInfo_TV_TMDB";
import { getSection } from "../../utils/classify";
import { API_BASE } from "../../utils/routes";

// export const getServerSideProps = async (context) => {
//   return { props: { data, retailData, category } };
// };

const Release = () => {
  const [data, setData] = useState();
  const [retailData, setRetailData] = useState();
  const [category, setCategory] = useState();
  const borderColor = useColorModeValue("gray.300", "gray.700");
  const router = useRouter();
  const { _id } = router.query;

  useEffect(() => {
    if (_id) getData();
  }, [_id]);

  const getData = async () => {
    // fetch release data

    const url = `${API_BASE}/api/data/details/_id/${_id}`;
    console.log("getting:", url);
    const res = await fetch(url);
    const data = await res.json();

    setData(data);

    // fetch retail data
    const category = getSection(data.name, data.section).includes("TV")
      ? "series"
      : "movie";

    setCategory(category);

    const retailUrl = `${API_BASE}/api/retail/tmdb/${category}/${data.name}`;
    const retailRes = await fetch(retailUrl);
    let retailData = await retailRes.json();
    console.log("retailData:", retailData);
    retailData = !retailData.success ? null : retailData.data;
    setRetailData(retailData);
  };

  return (
    <>
      <Head>
        <title>Release | {data?.name}</title>
      </Head>

      <Layout>
        {data && <DetailsTable data={data} borderColor={borderColor} />}

        {retailData && category === "series" && (
          <RetailInfo_TV_TMDB data={retailData} borderColor={borderColor} />
        )}

        {retailData && category === "movie" && (
          <RetailInfo_Movie_TMDB data={retailData} borderColor={borderColor} />
        )}

        {/* <RetailTable data={retailData} borderColor={borderColor} /> */}

        {/* <Proof proof={false} /> */}

        {data && <NFO data={data} borderColor={borderColor} />}
      </Layout>
    </>
  );
};

export default Release;
