import { defineField, defineType } from 'sanity'

export const blogType = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (rule) => rule.required().error(`Required to generate a page on the website`),
      hidden: ({ document }) => !document?.title,
      description:
        'This is the URL path for the blog post. It can be automatically generated from the title.',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    }),
    defineField({
      name: 'image',
      type: 'customImage',
      title: 'Image',
    }),
    defineField({
      name: 'text',
      type: 'normalText',
      title: 'Text',
    }),
  ],
})
