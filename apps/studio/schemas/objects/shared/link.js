export default {
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    {
      title: "Select link type",
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "External", value: "external" },
          { title: "Internal", value: "internal" },
        ],
        layout: "radio",
      },
    },
    {
      type: "string",
      name: "externalLink",
      title: "Url target",
      description: "An external URL, must start with https://...",
      hidden: ({ parent, value }) => !value && parent?.type !== "external",
      validation: (Rule) =>
      Rule.custom((name, value) => {
        if (value.parent.type === "external") {
          return Boolean(name) || "Required";
        }

        return true;
      }),
    },
    {
      type: "string",
      name: "linkText",
      title: "Link text",
      description:
        'What the link will be displayed as, i.e "Click here", "Read more"',
      // validation: (Rule) => Rule.required(),
    },
    {
      title: "Target",
      name: "internalLink",
      type: "reference",
      to: [{ type: "event" }, { type: "page" }],
      validation: (Rule) =>
        Rule.custom((name, value) => {
          if (value.parent.type === "internal") {
            return Boolean(name) || "Required";
          }

          return true;
        }),
      hidden: ({ parent, value }) => !value && parent?.type !== "internal",
    },
    {
        title: "Open in new tab?",
        name: "blank",
        description: "Read https://css-tricks.com/use-target_blank/",
        type: "boolean",
        initialValue: false,
        validation: (Rule) => Rule.required(),
      },
  ],
};
