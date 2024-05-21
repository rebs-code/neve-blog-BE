export default {
    name: 'jumbotron',
    title: 'Jumbotron',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'customImage',
        },
        {
            name: 'text',
            title: 'Text',
            type: 'normalText',
        }
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle',
            media: 'image',
        },
    },
}