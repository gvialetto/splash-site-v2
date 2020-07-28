type SocialLinkProps = {
  name: string;
  url: string;
};

type SocialLinksProps = {
  socialData: SocialLinkProps[];
};

const SocialLink = ({ name, url }: SocialLinkProps): JSX.Element => (
  <a className="inline-block mx-2" href={url} id={name}>
    <img
      className="transition-opacity duration-500 h-16 w-16 opacity-25 hover:opacity-100"
      src={`images/${name}.svg`}
    />
  </a>
);

const SocialLinks = ({ socialData }: SocialLinksProps): JSX.Element => (
  <div className="container content-center text-center">
    {socialData.map((item) => (
      <SocialLink key={item.name} name={item.name} url={item.url} />
    ))}
  </div>
);

export default SocialLinks;
