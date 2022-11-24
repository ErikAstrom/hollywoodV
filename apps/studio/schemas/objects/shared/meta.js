export default {
    name: "meta",
    title: "Meta & SEO",
    type: "object",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Meta title",
        description: "This text will display in the browser tab.",
        validation: (Rule) => Rule.required().max(62),
      },
      {
        name: "description",
        type: "text",
        title: "Meta Description",
        description: "This description populates meta-tags on the webpage.",
        validation: (Rule) => Rule.required().max(160),
      },
      {
        name: "openGraphImage",
        type: "image",
        title: "Meta Image",
        description: "Image for sharing previews on Facebook, Twitter etc.",
        validation: (Rule) => Rule.required(),
      },
    ],
  };