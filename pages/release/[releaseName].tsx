import {
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/core";
import { GetServerSideProps } from "next";
import TimeAgo from "timeago-react";
import Layout from "../../components/Layout";
import NFO from "../../components/NFO";
import Proof from "../../components/Proof";
import http from "../../utils/http";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { releaseName } = context.params;
  // const res = await fetch(`http://la55u.me/api/releases/${rid}`);
  // const data = await res.json();
  const url = `/data/details/name/${releaseName}`;
  console.log("getting details:", url);
  const res = await http.get(url);
  return { props: { res } };
};

const Release = ({ data }) => {
  const { colorMode } = useColorMode();

  const borderColor = { dark: "gray.700", light: "gray.300" };

  return (
    <Layout>
      <Flex
        justify="space-between"
        borderWidth="1px"
        borderRadius="md"
        borderColor={borderColor[colorMode]}
      >
        <Grid p={4} gap="0 10px" templateColumns="150px auto">
          <Heading size="sm">Release name</Heading>
          <Text wordBreak="break-all">{data.name}</Text>

          <Heading size="sm">Release group</Heading>
          <Text>{data.grp}</Text>

          <Heading size="sm">Added on</Heading>
          <Text>
            {new Date(data.added * 1000).toLocaleString()} (
            <TimeAgo datetime={new Date(data.added * 1000)} />)
          </Text>

          <Heading size="sm">Section</Heading>
          <Text>{data.section}</Text>

          <Heading size="sm">No. of files</Heading>
          <Text>{data.files}</Text>

          <Heading size="sm">Size</Heading>
          <Text>{data.size} MB</Text>

          <Heading size="sm">Genre</Heading>
          <Text>{data.genre || "-"}</Text>

          <Heading size="sm">Retail link</Heading>
          <Text>{data.url || "-"}</Text>

          <Heading size="sm">Tracer sites</Heading>
          <Text fontStyle="italic">
            {data.traces.map((tr) => `#${tr.rank} ${tr.site}`).join(", ")}
          </Text>

          <Heading size="sm">Nukes</Heading>
          <Text>
            {data.nukes.length === 0 ? (
              "-"
            ) : (
              <>
                {data.nukes.map((nuke) => (
                  <Text
                    key={nuke.reason}
                  >{`[${nuke.type}] ${nuke.reason}`}</Text>
                ))}
              </>
            )}
          </Text>
        </Grid>

        <Image
          src="https://bit.ly/sage-adebayo"
          alt=""
          m={4}
          objectFit="cover"
          htmlHeight="100%"
          htmlWidth="150px"
        />
      </Flex>

      <Proof proof={true} />

      <NFO nfo={false} />

      <pre>{JSON.stringify(data, null, 3)}</pre>
    </Layout>
  );
};

export default Release;
