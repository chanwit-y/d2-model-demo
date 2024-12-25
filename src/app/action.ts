"use server";
import * as fs from "fs";

import { db } from "@/db";
import { usersTable } from "@/db/schema/user";
import { revalidatePath } from "next/cache";

// import { redirect } from 'next/navigation'

export async function createUser() {
  fs.readdir(".", (err, files) => {
    files.forEach((file) => {
      console.log(file);
    });
  });

//   const data = await db.select().from(usersTable);
//   console.log(data);

  //   return [];

  //   revalidatePath("/");
}
