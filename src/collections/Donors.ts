import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { CollectionConfig } from 'payload';

const Donors: CollectionConfig = {
  slug: 'donors',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    hidden: false,
    group: 'Attract Content',
    defaultColumns: ['name'],
  },
  fields: [
    {
      name: 'name',
      type: 'richText',
      editor: lexicalEditor({}),
    },
    {
      name: 'logo',
      type: 'relationship',
      relationTo: ['images'],
    },
    {
      name: 'greyscale',
      type: 'checkbox',
      defaultValue: true,
      label: 'Render logo as greyscale',
    },

    //
    // Alternate rich text field with only bold, italic, and underline
    //
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      required: false,
      admin: {
        description: 'Description that will show if there is no logo',
      },
    },
  ],
};

export default Donors;
