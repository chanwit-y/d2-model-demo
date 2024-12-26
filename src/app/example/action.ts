"use server";

import { db } from "@/db";
import { usersTable } from "@/db/schema/user";
import { revalidatePath } from "next/cache";

// import { redirect } from 'next/navigation'

export async function createUser() {
  try {
    const data = await db.select().from(usersTable);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }

  //   return [];

  revalidatePath("/");
}
