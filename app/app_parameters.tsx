import { FaInstagram, FaTiktok, FaSoundcloud, FaSpotify, FaGithub, FaRegUserCircle } from "react-icons/fa";
import winederlandIcon from '@/public/winederlandIcon.ico';
import swayOldHeart from '@/public/sway-old-heart.webp';
import { MdOutlineInsertLink } from "react-icons/md";
import { PiProjectorScreenChartDuotone } from "react-icons/pi";
import { IUserProfile } from "@/interfaces";

const profileData: IUserProfile = {
  title_name: "King Sway",
  bio: "github.com/kiingsway",
  header_layout: 'horizontal',
  theme: 'device',
  components: [
    {
      icon: <FaRegUserCircle />,
      type: 'text',
      title: 'About me',
      content: {
        text: '🧊🎛️📽️👨🏾‍💻 Trying to push some projects 👨🏾‍💻📽️🎛️🧊',
        text_alignment: 'left',
        font_size: 14,
      }
    },
    {
      icon: <MdOutlineInsertLink />,
      type: 'links',
      title: 'Links',
      content: {
        layout: 'horizontal',
        links: [
          {
            name: 'kiingsway',
            description: 'General',
            url: 'https://instagram.com/kiingsway',
            socialmedia_icon: <FaInstagram />,
            image_url: "/kiingsway_ig_profile",
          },
          {
            name: 'kiingsway',
            description: '📽️ Tiktok',
            url: 'https://www.tiktok.com/@kiingsway',
            socialmedia_icon: <FaTiktok />,
            image_url: "/kingsway_ttk_profile",
          },
          {
            name: 'suey.obj',
            description: '🧊 Blender Projects',
            url: 'https://instagram.com/suey.obj',
            socialmedia_icon: <FaInstagram />,
            image_url: "/sueyobj_ig_profile",
          },
          {
            name: 'king-sway',
            description: '🎛️ Songs & SETs',
            url: 'https://soundcloud.com/king-sway',
            socialmedia_icon: <FaSoundcloud />,
            image_url: "/kingsway_sc_profile",
          },
          {
            name: 'kiingsway',
            description: '🎛️ Spotify',
            url: 'https://open.spotify.com/user/12142254985',
            socialmedia_icon: <FaSpotify />,
            image_url: "/kingsway_sfy_profile",
          },
          {
            name: 'kiingsway',
            description: '👨🏾‍💻 Github',
            url: 'https://github.com/kiingsway',
            socialmedia_icon: <FaGithub />,
            image_url: "/kiingsway_gh_profile",
          },
        ]
      }
    },
    {
      icon: <PiProjectorScreenChartDuotone />,
      type: 'links',
      title: 'Latest Projects',
      content: {
        layout: 'vertical',
        links: [
          {
            name: 'Personal Projects (Native)',
            description: 'Toolbelt funcionalities for React Native (Use with Expo App)',
            url: "https://expo.dev/@kiingsway/personal-projects",
            image_url: swayOldHeart.src,
          },
          {
            name: 'Personal Projects',
            description: 'Toolbelt funcionalities',
            url: "https://personal-projects-taupe.vercel.app/",
            image_url: swayOldHeart.src,
          },
          {
            name: 'Winederland',
            description: 'Project for College',
            url: "https://project-winederland.vercel.app/",
            image_url: winederlandIcon.src,
          },
          {
            name: 'Sway Bio',
            description: "we are in it 😁👍",
            url: "#",
            image_url: swayOldHeart.src,
          },
        ]
      }
    }
  ]
};

export default profileData;