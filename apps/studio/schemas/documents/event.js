export default {
    name: "event",
    type: "document",
    title: "Event",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
      },
      {
        name: "description",
        type: "string",
        title: "Description",
      },
      {
        name: "image",
        type: "figure",
        title: "Event Image",
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
    ],
  };