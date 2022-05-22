import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "5ezlllsj", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: '2021-08-31', // use a UTC date string
  useCdn: false, // `false` if you want to ensure fresh data
});