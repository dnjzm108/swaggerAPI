import moduleName from 'module';

/**
 * @swagger
 * definitions:
 *  LoginInfo:
 *   type: object
 *   required:
 *    - content:
 *   properties:
 *    ID:
 *     type: string
 *     example: testID
 *    PW:
 *      type: string
 *      example: testPW
 */

/**
 * @swagger
 * definitions:
 *  LoginOutInfo:
 *   type: object
 *   required:
 *    - content:
 *   properties:
 *    ID:
 *     type: string
 *     example: testID
 *    PW:
 *      type: string
 *      example: testPW
 */

/**
 * @swagger
 * definitions:
 *  Users:
 *   type: object
 *   required:
 *    - content:
 *   properties:
 *    name:
 *     type: string
 *     example: testName
 *    age:
 *      type: string
 *      example: testAge
 */

/**
 * @swagger
 *  definitions:
 *   WebtoonImage:
 *    type: object
 *    required:
 *     - content:
 *    properties:
 *     webtoonInfo:
 *      type: object
 *      properties:
 *       wtId:
 *        type: integer
 *       createdAt:
 *        type: string
 *        format: datetime
 *       title:
 *        type: string
 *       writer:
 *        type: string
 *     linkInfo:
 *      type: array
 *      items:
 *       type: object
 *       properties:
 *        orderById:
 *         type: integer
 *        link:
 *         type: string
 */

// export default swaggerModels;