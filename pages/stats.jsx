import {
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Spinner,
  TableCaption,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { getStats } from "../redux/slices/statsSlice";

const Stats = () => {
  const { stats, error, loading } = useSelector((s) => s.stats);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!stats) dispatch(getStats());
  }, []);

  return (
    <Layout>
      <Heading>Statistics</Heading>
      <Text>Some fancy graphs coming soon...</Text>

      {!stats || loading ? (
        <Spinner />
      ) : (
        <Table mt={10} variant="simple">
          <Thead>
            <Tr>
              <Th>Metric</Th>
              <Th isNumeric>value</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Registered users</Td>
              <Td isNumeric>{stats.userCount}</Td>
            </Tr>
            <Tr>
              <Td>Active notifications</Td>
              <Td isNumeric>{stats.notificationCount}</Td>
            </Tr>
            <Tr>
              <Td>Releases</Td>
              <Td isNumeric>{stats.releaseCount}</Td>
            </Tr>
            <Tr>
              <Td>NFO files</Td>
              <Td isNumeric>{stats.nfoCount}</Td>
            </Tr>
          </Tbody>
        </Table>
      )}
    </Layout>
  );
};

export default Stats;
