export default {
    name: "button",
    type: "object",
    title: "Button",
    fields: [
      {
        title:'Where should the button point to?',
        type:'link',
        name:'btnlink'
      },
      {
        name:'btncolor',
        title:'Button color',
        type:'string',
        options: {
          list: [
            { title: 'Canary', value: 'canary' },
            { title: 'Ivory', value: 'ivory' },
            { title: 'Pebble', value: 'pebble' },
          ],
        },
      }
    ],
  }