type TComponentType = 'text' | 'links';
type TThemes = 'dark' | 'light' | 'device';
type TLayout = 'horizontal' | 'vertical';

interface ComponentProps {
  title: string;
  icon: JSX.Element;
}

interface IComponentText extends ComponentProps {
  type: 'text';
  content: {
    text: string;
    text_alignment: 'left' | 'center' | 'right';
    font_size: number;
  }
}


interface IComponentLinks extends ComponentProps {
  type: 'links';
  content: {
    layout: TLayout;
    links: Array<{
      name: string;
      description: string;
      url: string;
      socialmedia_icon?: JSX.Element;
      image_url: string;
    }>
  }
}

type TComponent = IComponentLinks | IComponentText;

interface IUserProfile {
  title_name: string;
  bio: string;
  header_layout: TLayout;
  theme: TThemes;
  components: TComponent[];
}