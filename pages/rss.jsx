import { API_BASE, API_ENDPOINT } from "../utils/routes";

const getRssXml = (releases) => {
  const rssItemsXml = blogPostsRssXml(releases);
  return `<?xml version="1.0" ?>
  <rss version="2.0" >
    <channel>
        <title>PREdb.live feed</title>
        <link>https://predb.live</link>
        <description>PRE and NFO database of warez scene releases with a notification system</description>
        <language>en</language>
        
        ${rssItemsXml}
    </channel>
  </rss>`;
};

const blogPostsRssXml = (releases) => {
  let rssItemsXml = "";

  releases.forEach((release) => {
    const trace = release.traces
      ? release.traces.map((t) => t.site).join(",")
      : "No site raced this";

    rssItemsXml += `
      <item>
        <title>${release.name}</title>
        <link>https://predb.live/release/${release.name}</link>
        <guid>https://predb.live/release/${release.name}</guid>
        <pubDate>${release.added}</pubDate>
        <description>${trace}</description>
      </item>`;
  });

  return rssItemsXml;
};

export const getServerSideProps = async (context) => {
  console.log("context:", context);
  const { res } = context;
  if (!res) return;

  const releaseResp = await fetch(API_BASE + API_ENDPOINT.RELEASES, {
    headers: { "accept-encoding": "identity" },
  });
  const releases = await releaseResp.json();

  res.setHeader("Content-Type", "application/xml");
  res.write(getRssXml(releases.data.values));
  res.end();
};

const RSS = () => {
  return <h1>RSS</h1>;
};

export default RSS;
