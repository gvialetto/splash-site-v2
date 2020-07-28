import Layout from "components/layout";
import SocialLinks from "components/social_links";
import Avatar from "components/avatar";
import Quote from "components/quote";
import ColorProvider from "components/color_provider";

const socialData = [
  { name: "twitter", url: "https://twitter.com/gvialetto" },
  { name: "github", url: "https://github.com/gvialetto" },
  { name: "linkedin", url: "http://www.linkedin.com/in/gvialetto" },
];

const Index = (): JSX.Element => (
  <Layout title="vialetto.me">
    <SocialLinks socialData={socialData} />
    <ColorProvider>
      <Avatar />
      <Quote />
    </ColorProvider>
  </Layout>
);

export default Index;
