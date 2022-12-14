const { request, response } = require("express");
const pool = require("../db/connection");
const modelsRegistro = require("../models/helpdesktop");

const addTecnico = async (req = request, res = response) =>{
    const {
        Nombre, 
        Apellido,
        Activo = "S"
    } = req.body
    
    if(!Nombre || !Apellido
       )
    {
        res.status(400).json({msg:"Hacen falta datos!"})
        return
    }

    let conn;
    
    try{
        conn = await pool.getConnection() //Realizamons la conexion

        const [SolicitudExist] = await conn.query(modelsRegistro.queryPersonalExist,[Nombre])

        if(SolicitudExist){
            res.status(400).json({msg: `El Tecnico ya se encuntra registrado en la base de datos.`})
            return
        }
        //Generamos la consulta
        const result = await conn.query(modelsRegistro.queryAddTecnico,[
            Nombre, 
            Apellido,
            Activo], (error) => {if (error) throw error})

        if (result.affectedRows ===0){ //En caso de no haber registros lo informamos
            res.status(400).json({msg: `No se pudo agregar el Tecnico a la base de datos`})
            return
        }

        res.json({msg:`Se agrego satisfactoriamente el Tecnico a la base de datos`}) //Se manda la lista de usuarios
    }
    catch(error){
        console.log(error)
        res.status(500).json({msg: error}) //Informamos el error
    }
    
    finally{
        if(conn) conn.end() //Termina la conexion
    }
    }

const getTecnico = async (req = request, res = response) =>{
    let conn;
    
    try{
        conn = await pool.getConnection() //Realizamons la conexion

        //Generamos la consulta
        const Solicitud = await conn.query(modelsRegistro.queryGetTecnico, (error) => {if (error) throw error})

        if (Solicitud.length===0){ //En caso de no haber registros lo informamos
            res.status(404).json({msg: "No existen Tecnicos registrados"})
            return
        }

        res.json({Solicitud}) //Se manda la lista de usuarios
    }
    catch(error){
        console.log(error)
        res.status(500).json({msg: error}) //Informamos el error
    }
    
    finally{
        if(conn) conn.end() //Termina la conexion
    }
    }   

const updTecnico = async (req = request, res = response) =>{
    const {id} = req.params
            const {
                Nombre, Apellido, Activo} = req.body
            
            if(
                !Nombre|| 
                !Apellido||
                !Activo||
                !id
               )
            {
                res.status(400).json({msg:"Faltan Datos"})
                return
            }

            let conn;
            
            try{
                conn = await pool.getConnection() //Realizamons la conexion
        
                //Generamos la consulta
                const result = await conn.query(`UPDATE Tecnico SET 
                Nombre = '${Nombre}', 
                Apellido = '${Apellido}',
                Activo = '${Activo}' 
                WHERE ID = ${id}`, (error) => {if (error) throw error})
        
                if (result.affectedRows ===0){ //En caso de no haber registros lo informamos
                    res.status(400).json({msg: `No se pudo modificar el Tecnico
                    `})
                    return
                }
        
                res.json({msg:`Se modifico satisfactoriamente el Tecnico`}) //Se manda la lista de usuarios
            }
            catch(error){
                console.log(error)
                res.status(500).json({msg: error}) //Informamos el error
            }

            finally{
                if(conn) conn.end() //Termina la conexion
           }
    }
const delTecnico = async (req = request, res = response) =>{
        const {id} = req.params
                
                if(
                    !id
                   )
                {
                    res.status(400).json({msg:"Faltan Datos"})
                    return
                }
    
                let conn;
                
                try{
                    conn = await pool.getConnection() //Realizamons la conexion
            
                    //Generamos la consulta
                    const result = await conn.query(modelsRegistro.queryDeleteTecnicoByID,[id], (error) => {if (error) throw error})
            
                    if (result.affectedRows ===0){ //En caso de no haber registros lo informamos
                        res.status(400).json({msg: `No se pudo eliminar el Tecnico`})
                        return
                    }
            
                    res.json({msg:`Se elimino satisfactoriamente el Tecnico`}) //Se manda la lista de usuarios
                }
                catch(error){
                    console.log(error)
                    res.status(500).json({msg: error}) //Informamos el error
                }
    
                finally{
                    if(conn) conn.end() //Termina la conexion
               }
        }     
const addRegistro = async (req = request, res = response) =>{      
    const {
                Nombre,Departamento, Categoria, Recurso, Emitido, Estado, Prioridad, Calificacion, Supervisor, Registrado
            } = req.body
            
            if(!Nombre || 
                !Departamento || 
                !Categoria ||
                !Recurso || 
                !Emitido || 
                !Estado || 
                !Prioridad || 
                !Calificacion || 
                !Supervisor ||
                !Registrado
               )
            {
                res.status(400).json({msg:"Hacen falta datos!"})
                return
            }
        
            let conn, idt;
            
            try{
                conn = await pool.getConnection() //Realizamons la conexion
        
                const [SolicitudExist] = await conn.query(modelsRegistro.queryRegistroExist,[Registrado])
        
                if(SolicitudExist){
                    res.status(400).json({msg: `El registro ya existe en la base de datos.`})
                    return
                }
                //Generamos la consulta
                const [tecnico] = await conn.query(modelsRegistro.queryGetTecnicoid,[Nombre])
                for (const key in tecnico) {
                    idt = tecnico[key]
                }
                const result = await conn.query(modelsRegistro.queryAddRegistro,[
                    idt, Departamento, Categoria, Recurso, Emitido, Estado, Prioridad, Calificacion, Supervisor, Registrado], (error) => {if (error) throw error})
        
                if (result.affectedRows ===0){ //En caso de no haber registros lo informamos
                    res.status(400).json({msg: `No se pudo agregar el Registro a la base de datos`})
                    return
                }
        
                res.json({msg:`Se agrego satisfactoriamente el Registro a la base de datos`}) //Se manda la lista de usuarios
            }
            catch(error){
                console.log(error)
                res.status(500).json({msg: error}) //Informamos el error
            }
            
            finally{
                if(conn) conn.end() //Termina la conexion
            }
}
const getRegistro = async (req = request, res = response) =>{
    let conn;
    
    try{
        conn = await pool.getConnection() //Realizamons la conexion

        //Generamos la consulta
        const Solicitud = await conn.query(modelsRegistro.queryGetRegistro, (error) => {if (error) throw error})

        if (Solicitud.length===0){ //En caso de no haber registros lo informamos
            res.status(404).json({msg: "No existen registros"})
            return
        }

        res.json({Solicitud}) //Se manda la lista de usuarios
    }
    catch(error){
        console.log(error)
        res.status(500).json({msg: error}) //Informamos el error
    }
    
    finally{
        if(conn) conn.end() //Termina la conexion
    }
    }  
module.exports = {addTecnico, getTecnico, updTecnico, delTecnico, addRegistro, getRegistro}