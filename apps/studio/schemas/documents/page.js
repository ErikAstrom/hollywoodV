export default {
    name: "page",
    type: "document",
    title: "Page",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 96,
        },
      },
      {
        name: "pageMeta",
        type: "meta",
      },
      {
        name: "sections",
        type: "array",
        title: "Page sections",
        of: [
          { type: "hero" },
        ],
      },
    ],
  };