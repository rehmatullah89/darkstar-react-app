// /app/api/users/route.js
import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function GET() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost', // Your MySQL host
      user: 'root', // Your MySQL user
      password: 'MW56prvSsd3U4DxAsjpYsD1JSlzuYfEmiII', // Your MySQL password
      database: 'sbr22052024', // Your MySQL database name
    });
    // console.log('connection', connection);
    const [rows] = await connection.execute('SELECT * FROM wp_users LIMIT 150');
    await connection.end();

    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
