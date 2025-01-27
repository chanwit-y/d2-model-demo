import { z } from "zod";

const baseFieldSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
});

export type TField = z.infer<typeof baseFieldSchema> & {
  fields: TField[];
};

export const fieldSchema: z.ZodType<TField> = baseFieldSchema.extend({
  fields: z.lazy(() => fieldSchema.array()),
});

export const modelSchema = z.object({
  model: z.object({
    name: z.string(),
    fields: fieldSchema.array(),
  }),
});

export type TModel = z.infer<typeof modelSchema>;

modelSchema.parse({
  model: {
    name: "name",
    fields: [
      {
        id: "2",
        name: "name",
        type: "string",
        fields: [
          {
            id: "3",
            name: "name",
            type: "string",
            fields: [],
          },
          {
            id: "4",
            name: "name",
            type: "string",
            fields: [
              {
                id: "5",
                name: "name",
                type: "string",
                fields: [],
              },
            ],
          },
        ],
      },
      {
        id: "3",
        name: "name",
        type: "string",
        fields: [],
      },
    ],
  },
});
