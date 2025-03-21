import { get } from "lodash";
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

const x = z
  .object({
    a: z.number(),
    b: z.number(),
    c: z.object({
      d: z.number(),
    }),
    arr: z.array(z.number()),
  })
  .refine((data) => data["a"] > data["c"]["d"], {
    message: "A must be greater than B",

  })
  .refine(
    (data) => {
      const sum = data.arr.reduce((acc, curr) => acc + curr, 0);
      return sum > data["a"];
    },
    {
      message: "Sum of array must be greater than A",
    }
  );

// try {
  const s = x.safeParse({
    a: 10,
    b: 20,
    c: {
      d: 40,
    },
    arr: [1, 2, 3],
  });
  console.log("Hi")
  console.log(s.error?.issues)
  console.log(get(s.error?.issues, "[0].message"))
// } catch (e) {
//   console.log(e);
// }

modelSchema.parse({
  model: {
    name: "name",
    fields: [
      {
        id: "2",
        name: "name",
        type: "string",
        // validate: [rule, expr, cond],
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

// const ZodTest = z
//   .object({
//     name: z.string(),
//     age: z.number(),
//   })
//   .refine((data) => data.age >= 33 && data.name === "someone", {
//     message: "Age must be greater than 33",
//     path: ["name"],
//   });

// ZodTest.parse({
//   name: "someonex",
//   age: 33,
// });
