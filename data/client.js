import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "gntxbl4n",
  dataset: "production",
  useCdn: true,
});
