type TComponentType = 'about' | 'links';

type TContentAboutType = string;

type TContentInstaType = {
  name: string;
  url: string;
  image_url?: string;
  description?: string;
  socialmedia_icon: JSX.Element
}[];

interface ComponentProps {
  title: string;
}

interface IComponentAbout extends ComponentProps {
  type: 'about',
  content: string;
}

interface IComponentLinks extends ComponentProps {
  type: 'links',
  content: TContentInstaType;
}

type TComponent = IComponentAbout | IComponentLinks;

interface IAppConfig {
  name: string;
  bio: string;
  layout: "horizontal" | "vertical";
  theme: 'dark' | 'light' | 'device';
  components: TComponent[],
}