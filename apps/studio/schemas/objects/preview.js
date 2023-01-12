export default {
    name: "preview",
    title: "preview section",
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
        title: "Preview title",
        description: "Header title for Preview",
        validation: (Rule) => Rule.required().max(62),
      },
      {
        name: "description",
        type: "string",
        title: "Preview description",
        description: "Body text for Preview",
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
      {
        name: "btn1",
        type: "button",
        title: "Button 1",
        options: {
          collapsible:true
        },
      },
      {
        name: "btn2",
        type: "button",
        title: "Button 2",
        options: {
          collapsible:true
        },
      },
    ],
  };