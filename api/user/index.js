const { Router } = require('express');
const router = Router();
const controller = require('./controller')

/**
 * @swagger
 * /api/user/login:
 *  post:
 *   summary: 로그인 하는 API
 *   tags: [Login]
 *   consumes: 
 *    - application/json
 *   parameters:
 *      - in: body
 *        name: item
 *        description: 로그인 하기
 *        schema:
 *          $ref: '#/definitions/LoginInfo'
 *   responses:
 *    200:
 *      description: Success
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/definitions/LoginInfo'
 *    404:
 *     description: Not Found
 *    500:
 *     description: Internal server Error
 */
router.post('/login', controller.login);


/**
 * @swagger
 * /api/user/logout:
 *  post:
 *   summary: 로그아웃 하는 API
 *   tags: [Login]
 *   consumes: 
 *    - application/json
 *   parameters:
 *      - in: body
 *        name: item
 *        description: 로그아웃
 *        schema:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *               description: The user ID.
 *             username:
 *               type: string
 *               description: The user name.
 *   responses:
 *    200:
 *     description: Success
 *     content:
 *       application/json:
 *        schema:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *               description: The user ID.
 *             username:
 *               type: string
 *               description: The user name.
 *    404:
 *     description: Not Found
 *    500:
 *     description: Internal server Error
 */
router.post('/logout', controller.logout);


module.exports = router