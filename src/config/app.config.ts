
// FUNCION POARA VALIDAR LAS VARIABLES DE ENTORNO
export const EnvConfiguration = () => ({
    environment: process.env.NODE_ENV || 'dev',
    mongoDb: process.env.MONGODB,
    port: process.env.PORT,
    defaultLimit: process.env.DEFAULT_LIMIT,
})