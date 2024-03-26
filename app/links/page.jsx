import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faYoutube,
  faMastodon,
  faLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faDollarSign } from "@fortawesome/free-solid-svg-icons";

library.add(
  faGithub,
  faYoutube,
  faGlobe,
  faMastodon,
  faLinkedin,
  faDiscord,
  faDollarSign
);

import background from "@/public/images/links/background.png";
import Avatar from "@/app/components/avatar.jsx";
import LinkCard from "@/app/components/cards/linkcard";
import Image from "next/image";

export default function Page() {
  return (
    <div className="h-screen">
      <Image
        src={background}
        className="-z-10 h-screen w-screen grayscale-[75%] blur-[25px] fixed md:object-cover"
        quality={100}
        alt="A background for the page, both the bisexual and nonbinary flags intersecting"
      />
      <div className="flex flex-col justify-center items-center py-16">
        <div className="flex relative min-h-48 min-w-48 py-4 md:min-h-64 md:min-w-64">
          <Avatar className="rounded-[70px] max-h-48 max-w-48 relative" />
        </div>
        <div className="flex flex-col py-8 text-center justify-center items-center">
          <h1 className="font-bold text-3xl py-4">FloridaMan7588</h1>
          <p className="py-4 px-4 text-lg">
            kittycoded enby programmer on the internet • minor • do drugs •
            become ungovernable
          </p>
          <p className="py-4 px-4 text-lg">He/They</p>
          <LinkCard
            icon="fa-solid fa-globe"
            name="Website"
            color="blue-700"
            link="https://fm7588.me/website"
            description="Link to Personal portfolio/website"
            className="px-4 py-4"
          />
          <LinkCard
            icon="fa-brands fa-github"
            name="GitHub"
            color="black"
            link="https://fm7588.me/github"
            description="Link to Personal GitHub Page"
            className="px-4 py-4"
          />
          <LinkCard
            icon="fa-brands fa-linkedin"
            name="LinkedIn"
            color="indigo-700"
            link="https://fm7588.me/linkedin"
            description="Link to Personal LinkedIn page"
            className="px-4 py-4"
          />
          <LinkCard
            icon="fa-brands fa-mastodon"
            name="Mastodon"
            color="violet-900"
            link="https://fm7588.me/mastodon"
            description="Link to Personal Microblog/ Mastodon page"
            className="px-4 py-4"
          />
          <LinkCard
            icon="fa-brands fa-youtube"
            name="YouTube"
            color="red-600"
            link="https://fm7588.me/youtube1"
            description="Link to Programming YouTube Channel"
            className="px-4 py-4"
          />
          <LinkCard
            icon="fa-brands fa-discord"
            name="Discord Server"
            color="indigo-600"
            link="https://fm7588.me/discord"
            description="Link to Project discord server"
            className="px-4 py-4"
          />
          <LinkCard
            icon="fa-solid fa-dollar-sign"
            name="Ko-Fi"
            color="sky-400"
            link="https://fm7588.me/kofi"
            description="Link to Ko-Fi page"
            className="px-4 py-4"
          />
          <LinkCard
            icon="fa-solid fa-dollar-sign"
            name="Buy Me a Coffee"
            color="amber-400"
            link="https://fm7588.me/coffee"
            description="Link to Buy me A Coffee"
            className="px-4 py-4"
          />
          <p className="py-4 px-4 text-lg">Projects!</p>
          <LinkCard
            icon="fa-brands fa-github"
            name="Waterfox Flatpak GitHub"
            color="black"
            link="https://fm7588.me/waterfox-github"
            description="Link to Waterfox Flatpak GitHub"
            className="px-4 py-4"
          />
          <LinkCard
            icon="fa-brands fa-github"
            name="Mochad Addon GitHub"
            color="black"
            link="https://fm7588.me/mochad-github"
            description="Link to Mochad Addon GitHub"
            className="px-4 py-4"
          />
        </div>
      </div>
    </div>
  );
}
