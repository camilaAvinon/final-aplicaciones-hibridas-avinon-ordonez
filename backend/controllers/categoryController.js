const categoryModel = require('../models/categoryModel');

//Crear
exports.create = async (req, res)=> {
    try {
        const {name} = req.body;
        // Validaciones
        if (!name){
            res.status(400).json({msg: 'Se enviarion campos vacíos.'});
        } else if (typeof name != 'string'){
            res.status(400).json({msg: 'La categoria ingresada no es valida.'});
        }
        const newCategory = new categoryModel({
            name: name
        });
        // Creando de la categoría
        await newCategory.save();
        res.status(201).json({
            msg: 'Categoria guardada.',
            id: newCategory._id
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({ msg:'Error en el servidor.' })
    }
}

//Actualizar
exports.update = async (req, res) => {
    try {
        const category = req.body;
        const { categoryId } = req.params;
        // Validaciones
        if (!category.name){
            res.status(400).json({msg: 'Se enviaron campos vacios.'});
        } else if (typeof category.name != 'string'){
            res.status(400).json({msg: 'La categorianingresada no es valida.'});
        }
        const filter = { _id: categoryId };
        const data = {
            name: category.name
        }
        // Actualizando categoria
        const result = await categoryModel.updateOne(filter, data);
        res.json({
            msg: 'Categoria actualizada.',
            data: result
        });
    } catch (e) {
        console.log(error);
        res.status(500).json({msg: 'Error en el servidor.'});
    }
}

//Eliminar
exports.delete = async (req, res) =>{
    try {
        const { categoryId } = req.params;
        const filter = { _id: categoryId };
        // Eliminando categoría
        const result = await categoryModel.deleteOne(filter);
        res.json({
            msg: 'Categoria eliminada',
            data: result
        });
    } catch (e) {
        console.log(error);
        res.status(500).json({msg: 'Error en el servidor.'});
    }
}

//Lamar a todos
exports.call = async (req, res) => {
    try {
        // Llamando categorías
        const categories = await categoryModel.find();
        if(categories){
            res.json({
                msg: 'Lista de categorias',
                data: categories
            });
        } else {
            res.json({msg: 'No se encontro la informacion.'})
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({msg: 'Error en el servidor.'});
    }
}

//Llamar por id
exports.callById = async (req, res) => {
    try {
        const { categoryId } = req.params;
        // Llamando categoría
        const category = await categoryModel.findById(categoryId);
        if (category){
            res.json({
                msg: 'Categoria',
                data: category
            });
        } else {
            res.json({msg: 'Categoria no encontrada'});
        }
    } catch (e) {
        console.log(e);
        res.status(500).json( { msg: 'Error en el servidor.' });
    }
}