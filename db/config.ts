import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config


const Certificate = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  }
})

const Codes = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    certificate_id: column.number({ references: () => Certificate.columns.id }),
    name: column.text(),
  }
})

export default defineDb({
  tables: {
    Certificate,
    Codes
  }
});
