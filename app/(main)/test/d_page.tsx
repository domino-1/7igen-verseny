// Import Client Component
import HomePage from "../../home-page";
import { getAllPostsForHome } from "../../../lib/api";

// export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
//   const allPosts = await getAllPostsForHome(preview);

//   return {
//     props: { allPosts, preview },
//     revalidate: 10,
//   };
// };

// This function can be named anything
async function getProjects({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  //const res = await fetch(`https://...`);
  //const projects = await res.json();

  return allPosts;
}

export default async function Index() {
  const projects = await getProjects({ preview: false });

  return projects.map((project) => <div>{project.name}</div>);
}
