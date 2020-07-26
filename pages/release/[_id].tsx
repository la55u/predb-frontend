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
      <Flex
        justify="space-between"
        borderWidth="1px"
        borderRadius="md"
        borderColor={borderColor[colorMode]}
      >
        <Grid p={4} gap="0 20px" templateColumns="150px auto">
          <Heading size="sm" justifySelf="end">
            Release
          </Heading>
          <Text wordBreak="break-all">{data.name}</Text>

          <Heading size="sm" justifySelf="end">
            Group
          </Heading>
          <Text>{data.group}</Text>

          <Heading size="sm" justifySelf="end">
            Added
          </Heading>
          <Text>
            {new Date(data.added).toLocaleString()} (
            <TimeAgo datetime={new Date(data.added)} />)
          </Text>

          <Heading size="sm" justifySelf="end">
            Section
          </Heading>
          <Text>{data.section}</Text>

          <Heading size="sm" justifySelf="end">
            No. of files
          </Heading>
          <Text>{data.files}</Text>

          <Heading size="sm" justifySelf="end">
            Size
          </Heading>
          <Text>{data.size} MB</Text>

          <Heading size="sm" justifySelf="end">
            Genre
          </Heading>
          <Text>{data.genre || "-"}</Text>

          <Heading size="sm" justifySelf="end">
            Retail link
          </Heading>
          <Text>{data.url || "-"}</Text>

          <Heading size="sm" justifySelf="end">
            Trace
          </Heading>
          <Text fontStyle="italic">
            {data.traces.map((tr) => `#${tr.rank} ${tr.site}`).join(", ")}
          </Text>

          <Heading size="sm" justifySelf="end">
            Nukes
          </Heading>
          <Text>
            {!data.nukes || data.nukes.length === 0 ? (
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
