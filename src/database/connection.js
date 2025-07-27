import sql from 'mssql';

const dbSettings = {
    server: "localhost",
    database: "dbCasosMP",
    user: "sa",
    password: "1234",    
    options: {
        encrypt: false, // true si usas Azure
        trustServerCertificate: true // útil en desarrollo local
    }
};

export const getConnection = async() => {
    try {
        const pool = await sql.connect(dbSettings);        
        return pool;
    } catch (error) {        
        console.error(error);
    }
};
