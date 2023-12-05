const commentModel = require('../models/commentModel');

// Crear
exports.create = async (req, res) => {
    try {
        const { userId, text } = req.body;
        // Validaciones
        if( !userId || !text ){
            res.status(400).json( { msg: 'Se enviaron campos vacios.'});
        } else if (typeof text != 'string'){
            res.status(400).json( { msg: 'El comentario ingresado no es valido.'});
        }
        const newComment = new commentModel({
            userId: userId,
            text: text,
        });
        // Creando el comentario
        await newComment.save();
        res.status(201).json({
            msg: 'Comenttario guardado.' , 
            id: newComment._id 
        });
    } catch (e) {
        onsole.log(e)
        res.status(500).json( { msg: 'Error en el servidor.' } );
    }
}

// Actualizar
exports.update = async (req, res) => {
    try {
        const comment = req.body;
        const { commentId } = req.params;
        // Validaciones
        if( !comment.userId || !comment.text){
            res.status(400).json( { msg: 'Se enviaron campos vacios.'});
        } else if (typeof comment.text != 'string'){
            res.status(400).json( { msg: 'El comentario ingresado no es valido.'});
        }
        const filter = { _id: commentId };
        const data = { 
            userId: comment.userId,
            text: comment.text,
        }
        // Actualizando comentario
        const result = await commentModel.updateOne( filter, data );
        res.json({
            msg: 'Comentario actualizado.', 
            data: result  
        });
    } catch (e) {
        console.log(e);
        res.json({
            msg: 'Error en el servidor. '   
        });
    }
}

// Eliminar
exports.delete = async (req, res) => {
    try {
        const { commentId } = req.params;
        const filter = { _id: commentId };
        // Eliminando el comentario
        const result = await commentModel.deleteOne(filter);
        res.json({
            msg: 'Comentario eliminado.', 
            data: result  
        });
    } catch (error) {
        console.log(error);
        res.status(500).json( { msg: 'Error en el servidor.' });
    }
}

// Llamar a todos
exports.call = async (req, res) => {
    try {
        // Llamando a los comentarios
        const comments = await commentModel.find();
        if (comments){
            res.json({
                msg: 'Lista de comentarios.', 
                data: comments  
            });
        } else {
            res.json({msg: 'No se encontró la información.'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json( { msg: 'Error en el servidor.' });
    }
}

// Llamar por id
exports.callById = async (req, res) => {
    try {
        const { commentId } = req.params;
        // Llamando al comentario
        const comments = await commentModel.findById(commentId);
        if (comments){
            res.json({
                msg: 'Comentario', 
                data: comments  
            });
        }  else {
            res.json({msg: 'Comentario no encontrado.'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json( { msg: 'Comentario no encontrado.' });
    }
}