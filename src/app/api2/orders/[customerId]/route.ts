import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { customerId } = req.query;
//   return NextResponse.json({ text: "Hello", customerId });
// }

export async function GET(
  request: Request,
  { params }: { params: { customerId: string } }
) {
  try {
    const slug = params.customerId;
    const db = await mysql.createConnection({
      host: "localhost", // Your MySQL host
      user: "root", // Your MySQL user
      password: "MW56prvSsd3U4DxAsjpYsD1JSlzuYfEmiII", // Your MySQL password
      database: "sbr22052024", // Your MySQL database name
    });
    // Fetch customer orders

    const [orders] = await db.query(
      `
      SELECT
    p.ID AS order_id,
    p.post_date,
    MAX(CASE WHEN pm.meta_key = '_billing_email' AND p.ID = pm.post_id THEN pm.meta_value END) AS billing_email,
    MAX(CASE WHEN pm.meta_key = '_billing_first_name' AND p.ID = pm.post_id THEN pm.meta_value END) AS billing_first_name,
    MAX(CASE WHEN pm.meta_key = '_billing_last_name' AND p.ID = pm.post_id THEN pm.meta_value END) AS billing_last_name,
    MAX(CASE WHEN pm.meta_key = '_billing_address_1' AND p.ID = pm.post_id THEN pm.meta_value END) AS billing_address_1,
    MAX(CASE WHEN pm.meta_key = '_billing_address_2' AND p.ID = pm.post_id THEN pm.meta_value END) AS billing_address_2,
    MAX(CASE WHEN pm.meta_key = '_billing_city' AND p.ID = pm.post_id THEN pm.meta_value END) AS billing_city,
    MAX(CASE WHEN pm.meta_key = '_billing_state' AND p.ID = pm.post_id THEN pm.meta_value END) AS billing_state,
    MAX(CASE WHEN pm.meta_key = '_billing_postcode' AND p.ID = pm.post_id THEN pm.meta_value END) AS billing_postcode,
    MAX(CASE WHEN pm.meta_key = '_shipping_first_name' AND p.ID = pm.post_id THEN pm.meta_value END) AS shipping_first_name,
    MAX(CASE WHEN pm.meta_key = '_shipping_last_name' AND p.ID = pm.post_id THEN pm.meta_value END) AS shipping_last_name,
    MAX(CASE WHEN pm.meta_key = '_shipping_address_1' AND p.ID = pm.post_id THEN pm.meta_value END) AS shipping_address_1,
    MAX(CASE WHEN pm.meta_key = '_shipping_address_2' AND p.ID = pm.post_id THEN pm.meta_value END) AS shipping_address_2,
    MAX(CASE WHEN pm.meta_key = '_shipping_city' AND p.ID = pm.post_id THEN pm.meta_value END) AS shipping_city,
    MAX(CASE WHEN pm.meta_key = '_shipping_state' AND p.ID = pm.post_id THEN pm.meta_value END) AS shipping_state,
    MAX(CASE WHEN pm.meta_key = '_shipping_postcode' AND p.ID = pm.post_id THEN pm.meta_value END) AS shipping_postcode,
    MAX(CASE WHEN pm.meta_key = '_order_total' AND p.ID = pm.post_id THEN pm.meta_value END) AS order_total,
    MAX(CASE WHEN pm.meta_key = '_order_tax' AND p.ID = pm.post_id THEN pm.meta_value END) AS order_tax,
    MAX(CASE WHEN pm.meta_key = '_paid_date' AND p.ID = pm.post_id THEN pm.meta_value END) AS paid_date,
    (
        SELECT JSON_ARRAYAGG(
            JSON_OBJECT(
                'item_id', oi.order_item_id,
                'item_name', oi.order_item_name,
                'item_type', oi.order_item_type,
                'item_meta', (
                    SELECT JSON_OBJECTAGG(
                        oim.meta_key, oim.meta_value
                    )
                    FROM wp_woocommerce_order_itemmeta oim
                    WHERE oim.order_item_id = oi.order_item_id
                )
            )
        )
        FROM wp_woocommerce_order_items oi
        WHERE oi.order_id = p.ID
    ) AS line_items
FROM
    wp_posts p
    JOIN wp_postmeta pm ON p.ID = pm.post_id
WHERE
    p.post_type = 'shop_order'
    AND pm.meta_key = '_customer_user' AND pm.meta_value = ?
    AND p.post_status != 'trash'
GROUP BY
    p.ID;
      `,
      [slug]
    );

    // const orderDetails = await Promise.all(
    //   orders.map(async (order) => {
    //     // Fetch order items and their meta for each order
    //     const [items] = await db.query(
    //       `
    //   SELECT i.order_item_id, i.order_item_name, im.meta_key, im.meta_value
    //   FROM wp_woocommerce_order_items i
    //   JOIN wp_woocommerce_order_itemmeta im ON i.order_item_id = im.order_item_id
    //   WHERE i.order_id = ?
    // `,
    //       [order.ID]
    //     );

    //     return {
    //       ...order,
    //       items,
    //     };
    //   })
    // );

    // res.status(200).json(orders);
    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
