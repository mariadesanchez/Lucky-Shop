'use server';
import { MercadoPagoConfig, Preference } from 'mercadopago';
import { redirect } from 'next/navigation';

interface Order {
  id: string;
  total: number;
}

export const mercadoPagoCheckPayment = async (order: Order) => {
  const accessToken = process.env.NEXT_MERCADO_PAGO_ACCESS_TOKEN!;
  
  const client = new MercadoPagoConfig({ accessToken });

  const preference = new Preference(client);

  const res = await preference.create({
    body: {
      external_reference: order?.id,
      items: [
        {
          id: order?.id,
          title: `Order #${order?.id.split("-").at(-1)}`,
          quantity: 1,
          unit_price: order.total,
        },
      ],
      redirect_urls: {
        failure: "https://lucky-shop-next14.vercel.app",
        success:"https://lucky-shop-next14.vercel.app",
      },
      back_urls: {
        failure: "https://lucky-shop-next14.vercel.app",
        success: "https://lucky-shop-next14.vercel.app",
      },
      auto_return: 'approved',
    },
  });

  redirect(res.init_point!); // Use init_point for the production environment
};
