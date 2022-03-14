const { Router } = require('express');
const router = Router();
const controller = require('./controller')

/**
 * @swagger
 *  /api/admin/user?page={page}:
 *   get:
 *    summary: 회원 정보 가져오는 API
 *    tags: [admin]
 *    consumes: 
 *     - application/json
 *    parameters:
 *     - in: query
 *       name: page
 *       description: 회원 정보 가져오기
 *       type: string
 *    responses:
 *     200:
 *      description: Success
 *      schema:
 *        $ref: '#/definitions/LoginOutInfo'
 *     404:
 *      description: Not Found
 *     500:
 *      description: Internal Server Error
 */
router.get('/user', controller.user);




/**
 * @swagger
 *  /api/admin/admin?title={title}:
 *   post:
 *    summary: 제목과 일치하는 웹툰 보여줌
 *    tags: [Webtoon]
 *    consumes: 
 *     - application/json
 *    parameters:
 *     - in: query
 *       name: title
 *       description: 요청하려는 웹툰의 타이틀
 *       type: string
 *       required: true
 *    responses:
 *     200:
 *      description: Success
 *      schema:
 *       $ref: '#/definitions/WebtoonImage'
 *     404:
 *      description: Not Found
 *     500:
 *      description: Internal Server Error
 */
router.post('/admin', controller.admin);




module.exports = router