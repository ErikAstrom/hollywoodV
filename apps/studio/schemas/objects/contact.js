export default {
    name: "contact",
    title: "Contact section",
    type: "object",
    fields: [
      {
        name: "label",
        type: "string",
        title: "Label",
      },
      {
        name: "title",
        type: "string",
        title: "Title",
        description: "Header title for Contact",
        validation: (Rule) => Rule.required().max(62),
      },
      {
        name: "description",
        type: "string",
        title: "Description",
        description: "Body text for Contact",
        validation: (Rule) => Rule.required().max(160),
      },

    ],
  };