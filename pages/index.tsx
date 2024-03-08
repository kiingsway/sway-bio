import React from 'react';
import { Layout } from 'antd';
import styles from './Home.module.scss';
import parameters from '../app/app_parameters';
import AppHeader from '@/pages-components/AppHeader';
import { Content } from 'antd/es/layout/layout';
import ComponentCard from '@/pages-components/ComponentCard';
import { FaGithub, FaInstagram, FaSpotify } from "react-icons/fa";
import { FaSoundcloud, FaTiktok } from "react-icons/fa6";

const aboutContent = `🧊🎛️📽️👨🏾‍💻 Trying to push some projects 👨🏾‍💻📽️🎛️🧊`;

const appConfigDefault: IAppConfig = {
  name: parameters.username,
  bio: parameters.bio,
  layout: 'horizontal',
  theme: 'device',
  components: [
    { title: 'About me', type: 'about', content: aboutContent },
    {
      title: 'Links', type: 'links', content: [
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
          image_url: "/swayobj_ig_profile",
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
    },
    {
      title: "Latest Projects",
      type: "latest_projects",
      content: [
        {
          url: "https://project-winederland.vercel.app/"
        }
      ]
    }
  ],
}

export default function Home(): JSX.Element {

  const appState = React.useState<IAppConfig>(appConfigDefault);

  const [appConfig] = appState;

  return (
    <Layout className={styles.Main}>
      <AppHeader appState={appState} imageUrl='' />

      <Content className={styles.Content}>
        {appConfig.components.map(c => <ComponentCard key={c.title} component={c} />)}
      </Content>
    </Layout>
  );
}