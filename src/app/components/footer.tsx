import { FunctionComponent } from "react";
import { GetSitePaths, formatPath } from "../utils";
import AnyCTA from "./anyCTA";
import FacebookIcon from "./socialIcons/facebook";
import WhatsAppIcon from "./socialIcons/whatsApp";
import InstagramIcon from "./socialIcons/instagram";
import LinkedInIcon from "./socialIcons/linkedIn";
import Picture from "./image";

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

const Footer: FunctionComponent<FooterProps> = ({
  socialLinks,
  legalLinks,
}) => {
  const sitePaths: string[] = GetSitePaths();
  return (
    <>
      <footer className="bg-darkishblue px-2 py-8">
        <div className="text-white md:flex md: justify-between max-w-lg">
          <div className="flex flex-col mb-6">
            {sitePaths.map((path, index) => (
              <>
                {!path.includes("/jobs-") && (
                  <AnyCTA key={index} type="link" title={path} link={path}>
                    {formatPath(path)}
                  </AnyCTA>
                )}
              </>
            ))}
          </div>
          <div className="mb-6">
            <Picture
              className="md:px-3"
              imageSrc="https://i.ibb.co/cyGSdS0/aspo-logo.jpg"
              imageAlt=""
              width="200px"
              height="auto"
            />
          </div>
          <div className=" mb-6 hidden">
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
          <div className="flex flex-col mb-6">
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
        </div>
      </footer>
    </>
  );
};

export default Footer;
