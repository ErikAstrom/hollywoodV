import { string } from "prop-types";

export default {
    name: "services",
    title: "Services Section",
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
        title: "Section Title",
        validation: (Rule) => Rule.required().max(62),
      },
      {
        name:"cardArray",
        type:"array",
        title:"CTA Cards",
        of: [{ type: 'reference', to: { type: 'event' } }],
      }
    ],
  };