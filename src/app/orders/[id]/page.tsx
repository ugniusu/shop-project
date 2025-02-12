import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import React from "react";

const OrderPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const wixClient = await wixClientServer();
  let order;

  try {
    order = await wixClient.orders.getOrder(id);
  } catch (err) {
    return notFound();
  }

  return <div>OrderPage</div>;
};

export default OrderPage;
