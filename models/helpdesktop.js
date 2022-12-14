const modelsRegistro = {
    queryPersonalExist: `SELECT Nombre FROM Tecnico WHERE Nombre = ? `,
    queryAddTecnico: `INSERT INTO Tecnico(
        Nombre, 
        Apellido,
        Activo) 
    VALUES(
        ?,?,?)`,
    queryDeleteTecnicoByID: `UPDATE Tecnico SET Activo = 'N' WHERE ID = ?`,
    queryGetTecnico: "SELECT * FROM Tecnico",
    queryRegistroExist: `SELECT Registrado FROM Registros WHERE Registrado = ? `,
    queryGetTecnicoid: `SELECT ID FROM Tecnico WHERE Nombre = ?`,
    queryAddRegistro: `INSERT INTO Registros(IDT, Departamento, Categoria, Recurso, Emitido, Estado, Prioridad, Calificacion, Supervisor, Registrado)
    VALUES(
        ?,?,?,?,?,?,?,?,?,?)`,
    queryGetRegistro: `SELECT t.Nombre, r.Departamento, r.Categoria, r.Recurso, r.Emitido, r.Estado, r.Prioridad, r.Calificacion, r.Supervisor, r.Registrado FROM Registros r JOIN Tecnico t ON r.IDT = t.ID`

}

module.exports = modelsRegistro