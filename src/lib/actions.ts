"use server";

import { wixClientServer } from "./wixClientServer";

export const updateUser = async (formData: FormData) => {
  const wixClient = await wixClientServer();

  const id = formData.get("id") as string;
  const username = formData.get("username") as string;
  const firstName = formData.get("username") as string;
  const lastName = formData.get("username") as string;
  const email = formData.get("username") as string;
  const phone = formData.get("username") as string;

  try {
    const response = await wixClient.members.updateMember(id, {
      contact: {
        firstName: firstName || undefined,
        lastName: lastName || undefined,
        phones: [phone],
      },
      loginEmail: email || undefined,
      profile: { nickname: username || undefined },
    });
  } catch (error) {
    console.log(error);
  }
};
