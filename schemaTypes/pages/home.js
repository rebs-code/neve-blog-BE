export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            readOnly: true,
            initialValue: 'Home',
        },
        {
            name: 'sections',
            title: 'Sections',
            type: 'array',
            of: [
                {
                    type: 'hero',
                },
                {
                    type: 'jumbotron',
                },
            ],
        },
    ],
}