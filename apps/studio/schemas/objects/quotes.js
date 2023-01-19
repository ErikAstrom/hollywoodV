export default {
    name: "quotes",
    type: "object",
    title: "Quotes",
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
            { title: 'White', value: 'white' },
          ],
        },
      },
      {
        name:'quoteArray',
        title:'Array of Quotes',
        type:'array',
        validation: (Rule) => Rule.required(),
        of:[
            {
                title:"Quote",
                type:"object",
                name:"quote",
                fields:[
                    {
                        type:"string",
                        title:"Quote text",
                        name:"quotetext"
                    },
                    {
                        title:"Author",
                        type:"string",
                        name:"quoteauthor"
                    }
                ]
            },

        ]
      }
    ],
  }