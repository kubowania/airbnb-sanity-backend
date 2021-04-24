export default {
  name: 'review',
  title: 'Review',
  type: 'object',
  fields: [
    {
      name: 'reviewDescription',
      title: 'Review Description',
      type: 'string',
    },
    {
      name: 'traveller',
      title: 'Traveller',
      type: 'traveller',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'string',
      options: {
        list: [
          { title: '5 Stars', value: '5-stars' },
          { title: '4 Stars', value: '4-stars' },
          { title: '3 Stars', value: '3-stars' },
          { title: '2 Stars', value: '2-stars' },
          { title: '1 Stars', value: '1-stars' },
        ],
        layout: 'radio',
      },
    },
  ],
  preview: {
    select: { title: 'property', rating: 'rating' },
  },
}
