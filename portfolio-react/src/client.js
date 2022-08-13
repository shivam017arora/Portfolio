import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "ms8oovai",
  dataset: "production",
  apiVersion: "2021-03-25", // use current UTC date - see "specifying API version"!
  token:
    "skquSiaGQHkSQApSlEMuMfUE0hUu1hyfeRPSMVUjIkFvTtoHjBFA5z6lmXJy8nfK2f43lzQbaas9g6n5wJHNstJMjWQgDmG4vz16r0Ov5VGg5bNVHGMiqGfhnHglr0gu6bDS4dgA4AOBRWw6lS3aOYLZqgaWlgRaPaTqnpxLILdbGOcJud04", // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
