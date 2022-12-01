export default {
    name: "hero",
    title: "Hero section",
    type: "object",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Meta title",
        description: "Header title for hero",
        validation: (Rule) => Rule.required().max(62),
      },
      {
        name: "description",
        type: "string",
        title: "Meta Description",
        description: "Body text for hero",
        validation: (Rule) => Rule.required().max(160),
      },
      {
        title: 'Select Background Type',
        name: 'background',
        type: 'string',
        options: {
            list: [
              { title: 'Video', value: 'video' },
              { title: 'Image', value: 'image' },
            ],
          },
      },
      {
        name: "video",
        type: "file",
        title: "Background video",
        options: {
            accept: 'video/mp4'
          },
        // validation: (Rule) => Rule.required(),
        hidden: ({ parent, value }) => !value && parent?.background === 'image'
      },
      {
        name: "image",
        type: "figure",
        title: "Background Image",
        // validation: (Rule) => Rule.required(),
        hidden: ({ parent, value }) => !value && parent?.background === 'video'
      },
    ],
  };