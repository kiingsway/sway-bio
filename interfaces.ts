export type TComponentType = 'text' | 'links';
export type TLayout = 'horizontal' | 'vertical';
type TThemes = 'dark' | 'light' | 'device';

interface ComponentProps {
  title: string;
  icon: JSX.Element;
}

export interface IComponentText extends ComponentProps {
  type: 'text';
  content: {
    text: string;
    text_alignment: 'left' | 'center' | 'right';
    font_size: number;
  }
}


export interface IComponentLinks extends ComponentProps {
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

export type TComponent = IComponentLinks | IComponentText;

export interface IUserProfile {
  title_name: string;
  bio: string;
  header_layout: TLayout;
  theme: TThemes;
  components: TComponent[];
}