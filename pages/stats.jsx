import {
  Heading,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TimeAgo from "timeago-react";
import Layout from "../components/layout/Layout";
import { getStats } from "../redux/slices/statsSlice";

const Stats = () => {
  const { stats, error, loading } = useSelector((s) => s.stats);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!stats) dispatch(getStats());
  }, []);

  return (
    <Layout title="Stats">
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
              <Td>Users</Td>
              <Td isNumeric>{stats.userCount}</Td>
            </Tr>
            <Tr>
              <Td>Pending registrations</Td>
              <Td isNumeric>{stats.pendingUsersCount}</Td>
            </Tr>
            <Tr>
              <Td>Last registration</Td>
              <Td isNumeric>
                <TimeAgo
                  title={new Date(stats.lastRegistration).toLocaleString()}
                  datetime={new Date(stats.lastRegistration)}
                />
              </Td>
            </Tr>
            <Tr>
              <Td>Active notifications</Td>
              <Td isNumeric>{stats.notificationCount}</Td>
            </Tr>
            <Tr>
              <Td>Total releases</Td>
              <Td isNumeric>{stats.releaseCount.toLocaleString()}</Td>
            </Tr>
            <Tr>
              <Td>Releases with at least 1 tracer</Td>
              <Td isNumeric>{stats.releaseWithTraceCount.toLocaleString()}</Td>
            </Tr>
            <Tr>
              <Td>NFO files</Td>
              <Td isNumeric>{stats.nfoCount.toLocaleString()}</Td>
            </Tr>
          </Tbody>
        </Table>
      )}
    </Layout>
  );
};

export default Stats;
