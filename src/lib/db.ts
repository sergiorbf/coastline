import postgres from 'postgres';

// Conectar ao banco de dados usando a URL definida no .env
const sql = postgres(process.env.DATABASE_URL!, {
  ssl: false, // Se o banco estiver na nuvem, pode precisar de { ssl: 'require' }
});

export default sql;
