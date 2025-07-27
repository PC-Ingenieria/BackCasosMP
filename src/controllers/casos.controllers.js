import {getConnection} from '../database/connection.js';
import sql from 'mssql';

export const getCasos = async(req, res) =>{            
    try {
        const pool = await getConnection();
        const result = await pool.request()                
                .execute('SP_LISTAR_CASO');                 
        const listCasos = result.recordset;        
        res.json({
                    isSuccess: true,
                    data: listCasos
                });
    } catch (error) {
        res.json({
                    isSuccess: false,
                    message: "Error al Listar Registros"
                });
    }
};

export const getCaso = async(req, res) =>{
    try {
        const pool = await getConnection();
        const result = await pool.request()
                .input('idCaso', sql.Int, req.params.id)                
                .execute('SP_OBTENER_CASO');                 
        const obtenerCaso = result.recordset;        
        res.json({
                    isSuccess: true,
                    data: obtenerCaso
                });
    } catch (error) {
        res.json({
                    isSuccess: false,
                    message: "Error al Obtener Registros"
                });
    }
};

export const createCasos = async(req, res) =>{    
    const {descripcion, idTipoDelito, tipoDelito, idEstado, estado, idEtapa, etapa, idFiscalia, idFiscal} = req.body;
        
    try {
        const pool = await getConnection();
        const result = await pool.request()
                .input('descripcion', sql.VarChar(1000), descripcion)
                .input('idTipoDelito', sql.Int, idTipoDelito)
                .input('tipoDelito', sql.VarChar(200), tipoDelito)
                .input('idEstado', sql.Int, idEstado)
                .input('estado', sql.VarChar(200), estado)
                .input('idEtapa', sql.Int, idEtapa)
                .input('etapa', sql.VarChar(200), etapa)
                .input('idFiscalia', sql.Int, idFiscalia)
                .input('idFiscal', sql.Int, idFiscal)
                .execute('SP_CREATE_CASO');                 
        const newCaso = result.recordset[0];        
        res.json({
                    isSuccess: true,
                    data: newCaso
                });
    } catch (error) {
        res.json({
                    isSuccess: false,
                    message: "Error al Guardar Registro"
                });
    }
};

export const updateCasos = async(req, res) =>{
    const {descripcion, idTipoDelito, tipoDelito, idEstado, estado, idEtapa, etapa, idFiscalia, idFiscal} = req.body;
        
    try {
        const pool = await getConnection();
        const result = await pool.request()
                .input('idCaso', sql.Int, req.params.id)
                .input('descripcion', sql.VarChar(1000), descripcion)
                .input('idTipoDelito', sql.Int, idTipoDelito)
                .input('tipoDelito', sql.VarChar(200), tipoDelito)
                .input('idEstado', sql.Int, idEstado)
                .input('estado', sql.VarChar(200), estado)
                .input('idEtapa', sql.Int, idEtapa)
                .input('etapa', sql.VarChar(200), etapa)
                .input('idFiscalia', sql.Int, idFiscalia)
                .input('idFiscal', sql.Int, idFiscal)                
                .execute('SP_UPDATE_CASO');                 
        const upCaso = result.recordset[0];        
        res.json({
                    isSuccess: true,
                    data: upCaso
                });
    } catch (error) {
        res.json({
                    isSuccess: false,
                    message: "Error al Actualizar Registro"
                });
    }    
};

export const deleteCasos = async(req, res) =>{
    try {
        const pool = await getConnection();
        const result = await pool.request()
                .input('idCaso', sql.Int, req.params.id)                
                .execute('SP_DELETE_CASO');
        const delCaso = result.recordset;        
        res.json({
                    isSuccess: true,
                    data: delCaso
                });
    } catch (error) {
        res.json({
                    isSuccess: false,
                    message: "Error al Eliminar Registro"
                });
    }
};

export const getTipoDelito = async(req, res) =>{            
    try {
        const pool = await getConnection();
        const result = await pool.request()                
                .execute('SP_LISTAR_TIPOSDELITOS');                 
        const listTipoDelito = result.recordset;        
        res.json({
                    isSuccess: true,
                    data: listTipoDelito
                });
    } catch (error) {
        res.json({
                    isSuccess: false,
                    message: "Error al Listar Registros"
                });
    }
};

export const getEtapa = async(req, res) =>{            
    try {
        const pool = await getConnection();
        const result = await pool.request()                
                .execute('SP_LISTAR_ETAPA');
        const listTipoDelito = result.recordset;        
        res.json({
                    isSuccess: true,
                    data: listTipoDelito
                });
    } catch (error) {
        res.json({
                    isSuccess: false,
                    message: "Error al Listar Registros"
                });
    }
};

export const getFiscalias = async(req, res) =>{            
    try {
        const pool = await getConnection();
        const result = await pool.request()                
                .execute('SP_LISTAR_FISCALIAS');
        const listTipoDelito = result.recordset;        
        res.json({      
                    isSuccess: true,
                    data: listTipoDelito
                });
    } catch (error) {
        res.json({
                    isSuccess: false,
                    message: "Error al Listar Registros"
                });
    }
};

export const getFiscales = async(req, res) =>{
        
    const idFiscal = req.query.id;
    //console.log("xxxxxxxx",idFiscal);
        
    try {
        const pool = await getConnection();
        const result = await pool.request()
                .input('idFiscal', sql.Int, idFiscal)                
                .execute('SP_LISTAR_FISCALES');                 
        const upCaso = result.recordset;        
        res.json({
                    isSuccess: true,
                    data: upCaso
                });
    } catch (error) {
        res.json({
                    isSuccess: false,
                    message: "Error al Listar Registro"
                });
    }    
};