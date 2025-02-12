import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { orders } from "@wix/ecom";
import { cookies } from "next/headers";

export const wixClientServer = async () => {
  let refreshToken;

  try {
    const cookieStore = cookies();
    refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}");
  } catch (e) {}

  const wixClient = createClient({
    modules: {
      products,
      collections,
      orders,
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      tokens: {
        refreshToken,
        accessToken: { value: "", expiresAt: 0 },
      },
    }),
  });

  return wixClient;
};

// import { createClient, OAuthStrategy } from "@wix/sdk";
// import { collections, products } from "@wix/stores";
// import { cookies } from "next/headers";

// export const wixClientServer = async () => {
//   let refreshToken; // Declare refreshToken once

//   try {
//     const cookieStore = cookies();
//     refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}"); // Assign value to existing variable
//   } catch (e) {
//     console.error("Error parsing refreshToken:", e); // Debugging log
//   }

//   const wixClient = createClient({
//     modules: {
//       products,
//       collections,
//     },
//     auth: OAuthStrategy({
//       clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
//       tokens: {
//         refreshToken, // Now correctly assigned
//         accessToken: { value: "", expiresAt: 0 },
//       },
//     }),
//   });

//   return wixClient;
// };
