import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "ms8oovai",
  dataset: "production",
  apiVersion: "2021-03-25", // use current UTC date - see "specifying API version"!
  token:
    "sk8OFSaUQo0mY4etduQs4mM3UIaLuryzKlZmkJPspUVduuXoYNSBaQtJH33ZycZgO7cvKGlhYpQEIfrla3jlPc59p97VhYKCTXFJhSvpHz5gcmZVtBaiApHuujfmDiEOxUWbHFDogUnyJsrdis26tZE3qGzGWHFlnhnyCYChzdcLTXd0YU0S", // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
