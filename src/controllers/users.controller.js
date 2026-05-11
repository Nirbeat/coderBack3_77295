import { usersService } from "../services/index.js"
export class UsersController {

    /***/
    /**
     * OBTIENE TODOS LOS USUARIOS
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     */
    getAllUsers = async (req, res) => {
        const users = await usersService.getAll();
        res.send({ status: "success", payload: users })
    }

    // OBTIENE UN USUARIO POR SU ID
    getUser = async (req, res) => {
        const userId = req.params.uid;
        const user = await usersService.getUserById(userId);
        if (!user) return res.status(404).send({ status: "error", error: "User not found" })
        res.send({ status: "success", payload: user })
    }

    // ACTUALIZA UN USUARIO POR ID RECIBIENDO EL UPDATE VIA BODY
    updateUser = async (req, res) => {
        const updateBody = req.body;
        const userId = req.params.uid;
        const user = await usersService.getUserById(userId);
        if (!user) return res.status(404).send({ status: "error", error: "User not found" })
        const result = await usersService.update(userId, updateBody);
        res.send({ status: "success", message: "User updated" })
    }

    // ELIMINA UN USUARIO POR ID
    deleteUser = async (req, res) => {
        const userId = req.params.uid;
        const result = await usersService.getUserById(userId);
        res.send({ status: "success", message: "User deleted" })
    }

}
export default new UsersController();