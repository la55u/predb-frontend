import { useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DetailsTable from "../../components/detailspage/DetailsTable";
import Layout from "../../components/layout/Layout";
import NFO from "../../components/detailspage/NFO";
import RetailInfo_Movie_TMDB from "../../components/detailspage/RetailInfo_Movie_TMDB";
import RetailInfo_TV_TMDB from "../../components/detailspage/RetailInfo_TV_TMDB";
import { getSection } from "../../utils/classify";
import { API_BASE } from "../../utils/routes";
import { RetailInfo_Discogs } from "../../components/detailspage/RetailInfo_Discogs";

const ReleasePage = () => {
  const [data, setData] = useState({
    release: null, // release details
    category: null, // parsed category
  });
  const [retailData, setRetailData] = useState();
  const borderColor = useColorModeValue("gray.300", "gray.700");
  const router = useRouter();
  const { _id } = router.query;

  console.log("data:", data);
  console.log("retailData:", retailData);

  useEffect(() => {
    if (_id) getData();
  }, [_id]);

  useEffect(() => {
    if (data.release && data.category) {
      console.log("calling getRetailData();", data.release, data.category);
      getRetailData(data);
    }
  }, [data]);

  const getData = async () => {
    // fetch release data
    const url = `${API_BASE}/api/data/details/_id/${_id}`;
    const res = await fetch(url);
    const details = await res.json();

    // parse section
    const section = getSection(details.name, details.section);
    console.log("section:", section);
    let cat;
    if (section.includes("TV")) cat = "series";
    else if (section.includes("MOVIE")) cat = "movie";
    else if (section.includes("MUSIC")) cat = "music";

    setData({ release: details, category: cat });
  };

  const getRetailData = async (d) => {
    const { release, category } = d;
    let url;
    if (category === "music") {
      url = `${API_BASE}/api/retail/discogs/${release.name}`;
    } else {
      url = `${API_BASE}/api/retail/tmdb/${category}/${release.name}`;
    }
    const res = await fetch(url);
    const rd = (await res.json()).data;

    setRetailData(rd);
  };

  if (!data.release) return <Layout />;

  return (
    <Layout title={data.release.name}>
      {data && <DetailsTable data={data.release} borderColor={borderColor} />}

      {retailData && data.category === "series" && (
        <RetailInfo_TV_TMDB data={retailData} borderColor={borderColor} />
      )}

      {retailData && data.category === "movie" && (
        <RetailInfo_Movie_TMDB data={retailData} borderColor={borderColor} />
      )}

      {retailData && data.category === "music" && (
        <RetailInfo_Discogs data={retailData} />
      )}
      {/* <RetailTable data={retailData} borderColor={borderColor} /> */}

      {/* <Proof proof={false} /> */}

      {data && <NFO data={data.release} borderColor={borderColor} />}
    </Layout>
  );
};

export default ReleasePage;
