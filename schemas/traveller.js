export default {
  name: 'traveller',
  title: 'Traveller',
  type: 'reference',
  to: [{ type: 'person' }],
  preview: {
    select: {
      name: 'person.name',
      media: 'person.image',
    },
    prepare(selection) {
      const { name, media } = selection
      return {
        title: name,
        media,
      }
    },
  },
}
