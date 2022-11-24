 export default {
    title: "Figure",
    name: "figure",
    type: "image",
    fields: [
      {
        name: "alt",
        type: "string",
        title: "Alternative text",
        description: "Important for SEO and accessibility.",
        hidden: ({ parent, value }) => !parent && !value?.alt,
        options: {
          isHighlighted: true,
        },
      },
    ],
    options: {
      hotspot: true,
    },
  };
  