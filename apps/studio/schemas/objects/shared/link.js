export default {
    name: "link",
    title: "Link",
    type: "object",
    fields: [
        {
            title: 'Select link type',
            name: 'type',
            type: 'string',
            options: {
                list: [
                  { title: 'External', value: 'external' },
                  { title: 'Internal', value: 'internal' },
                ],
              },
          },
          {
            name: "external",
            type: "object",
            description:"An external, must start with https://...",
            title: "External Link",
            hidden: ({ parent, value }) => !value && parent?.type !== 'external',
            fields:[
                {
                    type:'string',
                    name:'externalLink',
                    title:'Url target',
                    description:"An external, must start with https://...",
                    validation: (Rule) => Rule.required(),
                },
                {
                    type:'string',
                    name:'externalText',
                    title:'Link text',
                    description:'What the link will be displayed as, i.e "Click here", "Read more"',
                    validation: (Rule) => Rule.required(),
                }
            ]
          },
          {
            name: "internal",
            type: "object",
            title: "Internal link",
            fields: [
                {
                    title:'Target',
                    name:'internalLink',
                    type:'reference',
                    to:[{type: 'event'}, {type:'page'}],
                    validation: (Rule) => Rule.required(),
                },
                {
                    title:'Link text',
                    type:'string',
                    name:'internalText',
                    description:'What the link will be displayed as, i.e "Click here", "Read more"',
                    validation: (Rule) => Rule.required(),
                }
            ],
            
            hidden: ({ parent, value }) => !value && parent?.type !== 'internal'
          },
    ],
  };