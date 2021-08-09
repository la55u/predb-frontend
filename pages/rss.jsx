import { API_BASE, API_ENDPOINT } from "../utils/routes";

const getRssXml = (releases) => {
  const rssItemsXml = getReleasesXML(releases);
  return `<?xml version="1.0" ?>
  <rss version="2.0" >
    <channel>
        <title>PREdb.live RSS feed</title>
        <link>https://predb.live</link>
        <description>PRE and NFO database and notification service</description>
        <language>en</language>
        ${rssItemsXml}
    </channel>
  </rss>`;
};

const getReleasesXML = (releases) => {
  let rssItemsXml = "";

  releases.forEach((release) => {
    const trace = release.traces
      ? release.traces.map((t) => t.site).join(",")
      : "No tracers yet";

    rssItemsXml += `
      <item>
        <title>${release.name}</title>
        <link>https://predb.live/release/${release._id}</link>
        <guid>https://predb.live/release/${release._id}</guid>
        <pubDate>${release.added}</pubDate>
        <description>${trace}</description>
      </item>`;
  });

  return rssItemsXml;
};

export const getServerSideProps = async (context) => {
  const { res } = context;
  if (!res) return;

  const releaseResp = await fetch(API_BASE + API_ENDPOINT.RELEASES);
  const releases = await releaseResp.json();

  res.setHeader("Content-Type", "application/rss+xml");
  res.write(getRssXml(releases.data.values));
  res.end();
  return { props: {} };
};

const RSS = () => null;

export default RSS;
