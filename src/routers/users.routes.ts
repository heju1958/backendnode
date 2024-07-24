import { Router } from "express";

import {
  createUserController,
  listUserController,
  listUsersController,
  updateUserController,
  deleteUserController,
} from "../controllers/users.controller";

import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const userRoutes = Router();

/**
 * @openapi
 * /user:
 *   post:
 *     tags:
 *       - User
 *     summary: Cria um novo usuário
 *     description: Endpoint para criar um novo usuário no sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: 'newuser'
 *               email:
 *                 type: string
 *                 example: 'newuser@gmail.com'
 *               password:
 *                 type: string
 *                 example: 'newpassword'
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: '123456'
 *                 name:
 *                   type: string
 *                   example: 'newuser'
 *                 email:
 *                   type: string
 *                   example: 'newuser@gmail.com'
 *                 createdAt:
 *                   type: string
 *                   example: '2024-07-24T17:37:18.449Z'
 *                 updatedAt:
 *                   type: string
 *                   example: '2024-07-24T17:37:18.449Z'
 *       400:
 *         description: Dados inválidos fornecidos.
 *       500:
 *         description: Erro interno do servidor.
 */
userRoutes.post("", createUserController);
/**
 * @openapi
 * /user:
 *   get:
 *     tags:
 *       - User
 *     summary: Lista todos os usuários
 *     description: Endpoint para obter a lista de todos os usuários no sistema.
 *     responses:
 *       200:
 *         description: Lista de usuários.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: '123456'
 *                   name:
 *                     type: string
 *                     example: 'user1'
 *                   email:
 *                     type: string
 *                     example: 'newuser@gmail.com'
 *                   createdAt:
 *                     type: string
 *                     example: '2024-07-24T17:37:18.449Z'
 *                   updatedAt:
 *                     type: string
 *                     example: '2024-07-24T17:37:18.449Z'
 *       500:
 *         description: Erro interno do servidor.
 */
userRoutes.get("", ensureAuthMiddleware, listUsersController);
/**
 * @openapi
 * /user/{id}:
 *   get:
 *     tags:
 *       - User
 *     summary: Obtém um usuário específico
 *     description: Endpoint para obter detalhes de um usuário específico pelo ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do usuário a ser obtido
 *         schema:
 *           type: string
 *           example: '123456'
 *     responses:
 *       200:
 *         description: Detalhes do usuário.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: '123456'
 *                 name:
 *                   type: string
 *                   example: 'user1'
 *                 email:
 *                   type: string
 *                   example: 'newuser@gmail.com'
 *                 createdAt:
 *                   type: string
 *                   example: '2024-07-24T17:37:18.449Z'
 *                 updatedAt:
 *                   type: string
 *                   example: '2024-07-24T17:37:18.449Z'
 *       404:
 *         description: Usuário não encontrado.
 *       500:
 *         description: Erro interno do servidor.
 */
userRoutes.get("/:id", ensureAuthMiddleware, listUserController);
/**
 * @openapi
 * /user/{id}:
 *   patch:
 *     tags:
 *       - User
 *     summary: Atualiza um usuário
 *     description: Endpoint para atualizar as informações de um usuário específico pelo ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do usuário a ser atualizado
 *         schema:
 *           type: string
 *           example: '123456'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: 'newuser2'
 *               email:
 *                 type: string
 *                 example: 'newuser2@gmail.com'
 *               password:
 *                 type: string
 *                 example: 'newpassword'
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: '123456'
 *                 name:
 *                   type: string
 *                   example: 'newuser2'
 *                 email:
 *                   type: string
 *                   example: 'newuser2@gmail.com'
 *                 createdAt:
 *                   type: string
 *                   example: '2024-07-24T17:37:18.449Z'
 *                 updatedAt:
 *                   type: string
 *                   example: '2024-07-24T17:37:18.449Z'
 *       400:
 *         description: Dados inválidos fornecidos.
 *       404:
 *         description: Usuário não encontrado.
 *       500:
 *         description: Erro interno do servidor.
 */
userRoutes.patch("/:id", ensureAuthMiddleware, updateUserController);
/**
 * @openapi
 * /user/{id}:
 *   delete:
 *     tags:
 *       - User
 *     summary: Remove um usuário
 *     description: Endpoint para remover um usuário específico pelo ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do usuário a ser removido
 *         schema:
 *           type: string
 *           example: '123456'
 *     responses:
 *       204:
 *         description: Usuário removido com sucesso.
 *       404:
 *         description: Usuário não encontrado.
 *       500:
 *         description: Erro interno do servidor.
 */
userRoutes.delete("/:id", ensureAuthMiddleware, deleteUserController);

export default userRoutes;
