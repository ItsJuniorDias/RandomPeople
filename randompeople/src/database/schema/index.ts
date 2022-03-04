import { appSchema } from "@nozbe/watermelondb";

import { userSchema } from "./userSchema";

const schemas = appSchema({
  version: 11,
  tables: [
    userSchema
  ]
})

export { schemas }