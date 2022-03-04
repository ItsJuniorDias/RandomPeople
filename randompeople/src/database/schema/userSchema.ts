import { tableSchema } from "@nozbe/watermelondb/Schema";

const userSchema = tableSchema({
  name: 'users',
  columns: [
    {
      name: 'user_id',
      type: 'string'
    },
    {
      name: 'name_title',
      type: 'string'
    },
    {
      name: 'name_first',
      type: 'string'
    },
    {
      name: 'name_last',
      type: 'string'
    },
    {
      name: 'picture_thumbnail',
      type: 'string'
    },
    {
      name: 'picture_large',
      type: 'string'
    },
    {
      name: 'gender',
      type: 'string'
    },
    {
      name: 'email',
      type: 'string'
    },
    {
      name: 'location_city',
      type: 'string'
    },
    {
      name: 'location_city',
      type: 'string'
    },
    {
      name: 'location_state',
      type: 'string'
    },
    {
      name: 'location_country',
      type: 'string'
    },
    {
      name: 'phone',
      type: 'string'
    },
    {
      name: 'cell',
      type: 'string'
    }
  ]
})

export { userSchema }