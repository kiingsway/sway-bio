/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: [
    "@ant-design",
    "@ant-design/pro-editor",
    "antd",
    "rc-pagination",
    "rc-picker",
    "rc-table",
    "rc-tree",
    "rc-util"
  ],
  rewrites: async () => [
    {
      source: "/kiingsway_ig_profile",
      destination: "https://scontent.cdninstagram.com/v/t51.2885-19/310458559_193446419808092_5790281747276574563_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=YLoDdoez5UIAX8xiNqW&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfC-cJsZb3iqw8vHWfzOHu8jTBAN73KWiUGM_YrGlI8e3A&oe=65EFDFB4&_nc_sid=10d13b",
    },
    {
      source: "/sueyobj_ig_profile",
      destination: "https://scontent.cdninstagram.com/v/t51.2885-19/431334609_1706474303209788_1001797942145952521_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=kjcjIpanUCcAX93T7B-&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfBAJO3c6DF8hHgR8U7HUDW2O9Ar43W0ZzDfnn7R3JTsHg&oe=65F0856C&_nc_sid=10d13b",
    },
    {
      source: "/kingsway_sc_profile",
      destination: "https://i1.sndcdn.com/avatars-000565755072-jl6mis-t500x500.jpg",
    },
    {
      source: "/kingsway_ttk_profile",
      destination: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ba39cc356008c520c8174ae05c0966b0~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1710032400&x-signature=QDuIKBGBjL6JcN6Gdw%2FztxYq0ng%3D",
    },
    {
      source: "/kingsway_sfy_profile",
      destination: "https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-1/174461181_5644435778907814_3840434838530490368_n.jpg?stp=dst-jpg_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=0be577&_nc_ohc=h9N_Nrl9qmEAX-lj28B&_nc_ht=scontent-iad3-2.xx&edm=AP4hL3IEAAAA&oh=00_AfBiAODEI-84yAqtjH3QLxDOdWF5Hh51fCJovY5LROWmtQ&oe=660C4363",
    },
    {
      source: "/kiingsway_gh_profile",
      destination: "https://avatars.githubusercontent.com/u/20396959?v=4",
    },
  ],
};

export default nextConfig;
