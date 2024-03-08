type TComponentType = 'about' | 'links' | 'latest_projects';

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

interface IComponentLatestProjects extends ComponentProps {
  type: 'latest_projects',
  content: any;
}

interface IComponentAbout extends ComponentProps {
  type: 'about',
  content: string;
}

interface IComponentLinks extends ComponentProps {
  type: 'links',
  content: TContentInstaType;
}

type TComponent = IComponentAbout | IComponentLinks | IComponentLatestProjects;

type TLayout = 'horizontal' | 'vertical';

interface IAppConfig {
  name: string;
  bio: string;
  layout: TLayout;
  theme: 'dark' | 'light' | 'device';
  components: TComponent[],
}