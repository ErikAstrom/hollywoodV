export default {
    name: "logos",
    type: "object",
    title: "Logos",
    fields: [
      {
        title:'Section title',
        type:'string',
        name:'title',
        validation: (Rule) => Rule.required(),
      },
      {
        name:'backgroundColor',
        title:'Background color',
        description:'This sets the background color for the whole section',
        type:'string',
        options: {
          list: [
            { title: 'Canary', value: 'canary' },
            { title: 'Ivory', value: 'ivory' },
            { title: 'Pebble', value: 'pebble' },
          ],
        },
      },
      {
        name:'logoArray',
        title:'Array of Logos',
        type:'array',
        validation: (Rule) => Rule.required(),
        of:[
            {
                type:'figure',
            }
        ]
      }
    ],
  }