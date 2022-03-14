const { Router } = require('express');
const router = Router();
const user = require('./user');
const admin = require('./admin');




// /**
//  * @swagger
//  *  /api?page={page}:
//  *   get:
//  *    summary: 회원 정보 가져오는 API
//  *    tags: [admin]
//  *    consumes: 
//  *     - application/json
//  *    parameters:
//  *     - in: query
//  *       name: page
//  *       description: 회원 정보 가져오기
//  *       type: string
//  *    responses:
//  *     200:
//  *      description: Success
//  *      schema:
//  *        $ref: '#/definitions/LoginOutInfo'
//  *     404:
//  *      description: Not Found
//  *     500:
//  *      description: Internal Server Error
//  */
router.get('/', ()=>{});

router.use('/user', user)
router.use('/admin', admin)

module.exports = router