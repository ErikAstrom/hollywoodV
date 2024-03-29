export default {
  name: "config",
  type: "document",
  title: "Site Configuration",
  groups: [
    {
      name: "general",
      title: "GENERAL",
    },
    {
      name: "header",
      title: "HEADER",
    },
    {
      name: "footer",
      title: "FOOTER",
    },
  ],
  fields: [
    {
      name: "icon",
      type: "image",
      description: "Icon shows in the tab of the web browser",
      title: "Icon",
      group: "general",
    },
    {
      name: "title",
      type: "string",
      title: "Site title",
      group: "general",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Front Page",
      name: "frontPage",
      type: "reference",
      to: { type: "page" },
      group: "general",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "footerlogo",
      type: "figure",
      description: "Logo in the footer",
      title: "Logo",
      group: "footer",
    },
    {
      title: "Footer Links",
      name: "footerlinks",
      type: "array",
      group: "footer",
      of: [
        {
          type: "link",
        },
      ],
      validation: (Rule) => Rule.required().max(4),
    },
    {
      title: "Header Logo",
      name: "headerLogo",
      type: "figure",
      group: "header",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Links",
      name: "links",
      type: "array",
      group: "header",
      of: [
        {
          type: "link",
        },
      ],
      validation: (Rule) => Rule.required().max(4),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Site Layout",
      };
    },
  },
};
