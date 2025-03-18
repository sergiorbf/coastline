import sql from "@/lib/db";
async function testConnection() {
    try {
        const users = await sql `SELECT NOW()`;
        console.log('Banco conectado:', users);
    }
    catch (error) {
        console.error('Erro ao conectar:', error);
    }
}
testConnection();
