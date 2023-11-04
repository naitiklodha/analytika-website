import { createClient } from "@sanity/client";

export default createClient({
  projectId: "gntxbl4n",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-11-03",
});
