/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Flex } from "@theme-ui/components";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import Listing from '@lekoarts/gatsby-theme-minimal-blog/src/components/listing';
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo";
import usePostTags from "../../../hooks/use-post-tags";

// Enable if linking to the "Tags" page
import { Link } from "gatsby";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";

// Enable if using Typescript
// type PostsProps = {
//   posts: {
//     slug: string
//     title: string
//     date: string
//     excerpt: string
//     description: string
//     timeToRead: number
//     tags?: {
//       name: string
//       slug: string
//     }[]
//   }[]
// }

const Blog = ({ posts }) => {
  const { tagsPath, basePath } = useMinimalBlogConfig(); // Enable if linking to the "Tags" page

  return (
    <Layout>
      <SEO title="Blog" />
      <Flex
        sx={{
          alignItems: `center`,
          justifyContent: `space-between`,
          flexFlow: `wrap`,
          'margin-bottom': '3em'
        }}
      >
        <Styled.h2>Blog</Styled.h2>
        <Styled.a
          as={Link}
          sx={{ variant: `links.secondary` }}
          to={replaceSlashes(`/${basePath}/${tagsPath}`)}
        >
          View all tags
        </Styled.a>
      </Flex>

      <Listing posts={posts}/>
    </Layout>
  );
};

export default Blog;
