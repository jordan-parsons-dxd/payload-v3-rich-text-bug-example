import { CollectionConfig } from 'payload';

const Images: CollectionConfig = {
  slug: 'images',
  access: {
    read: () => true,
  },
  upload: {
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/png', 'image/jpeg', 'image/svg+xml'],
  },
  admin: {
    useAsTitle: 'filename',
    hidden: false,
    group: 'Utilities',
  },
  fields: [
    {
      name: 'altText',
      type: 'text',
      required: false,
      label: 'Alt Text',
      admin: {
        placeholder: 'Enter alternative text for image accessibility',
      },
    },
  ],
};

export default Images;
