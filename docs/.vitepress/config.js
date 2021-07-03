/**
 * @abstract: vitepress配置文件
 * @version: 0.0.1
 * @author: @Haxif
 * @Date: 2021-07-03 13:18:12
 * @LastEditors: @Haxif
 * @LastEditTime: 2021-07-03 14:31:15
 */
module.exports = {
  title: "BGDFMSYS 的 文档",
  description: "BGDFMSYS 的 开发者文档",
  themeConfig: {
    docsDir: "docs",

    nav: [
      { text: "Guide", link: "/", activeMatch: "^/$|^/guide/" },
      // {
      //   text: "Release Notes",
      //   link: "https://github.com/RioMaker/vitepress-rio-docs/releases",
      // },
    ],

    sidebar: {
      "/guide/": getGuideSidebar(),
      "/": getGuideSidebar(),
    },
  },
};

function getGuideSidebar() {
  return [
    {
      text: "引导",
      children: [
        { text: "什么是 VitePress？", link: "/" },
        { text: "第一步", link: "/guide/test" },
      ],
    },
  ];
}
