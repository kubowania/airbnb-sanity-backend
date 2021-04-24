export default {
  name: 'propertyImage',
  title: 'Property Image',
  type: 'image',
  fields: [
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      options: {
        isHightLight: true,
      },
    },
  ],
  options: {
    hotspot: true,
  },
}
