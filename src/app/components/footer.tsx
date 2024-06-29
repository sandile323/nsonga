import { FunctionComponent } from "react";
import { GetSitePaths, formatPath } from "../utils";
import AnyCTA from "./anyCTA";
import FacebookIcon from "./socialIcons/facebook";
import WhatsAppIcon from "./socialIcons/whatsApp";
import InstagramIcon from "./socialIcons/instagram";
import LinkedInIcon from "./socialIcons/linkedIn";

export interface FooterProps {
  socialLinks?: SocialLinks[];
  legalLinks?: LegalLinks[];
}

interface LegalLinks {
  title: string;
  link: string;
}

interface SocialLinks {
  title: "Facebook" | "WhatsApp" | "Instagram" | "LinkedIn";
  link: string;
}

const Footer: FunctionComponent<FooterProps> = async ({
  socialLinks,
  legalLinks,
}) => {
  const sitePaths: string[] = await GetSitePaths();
  return (
    <>
      <footer>
        <div>
          {sitePaths.map((path, index) => (
            <>
              <AnyCTA key={index} type="link" title={path} link={path}>
                {formatPath(path)}
              </AnyCTA>
            </>
          ))}
        </div>
        <div>
          {socialLinks &&
            socialLinks.length > 0 &&
            socialLinks.map((socialLink, index) => (
              <AnyCTA
                type="link"
                title={socialLink.title}
                link={socialLink.link}
                key={index}
              >
                {socialLink.title === "Facebook" ? (
                  <>
                    <FacebookIcon />
                  </>
                ) : socialLink.title === "WhatsApp" ? (
                  <>
                    <WhatsAppIcon />
                  </>
                ) : socialLink.title === "Instagram" ? (
                  <>
                    <InstagramIcon />
                  </>
                ) : socialLink.title === "LinkedIn" ? (
                  <>
                    <LinkedInIcon />
                  </>
                ) : null}
              </AnyCTA>
            ))}
        </div>
        <div>
          {legalLinks &&
            legalLinks.length > 0 &&
            legalLinks.map((legalLink, index) => (
              <AnyCTA
                key={index}
                type="link"
                title={legalLink.title}
                link={legalLink.link}
              >
                {legalLink.title}
              </AnyCTA>
            ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
