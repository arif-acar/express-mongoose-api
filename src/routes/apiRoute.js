const express = require('express');

const router = express.Router();

const { gtrController } = require('../controllers');
const validator = require('../middlewares/validator');
const { retriveDataByFilterSchema } = require('../validations/gtrValidations');

router
  .route('/retriveDataByFilter')
  .post(validator(retriveDataByFilterSchema), gtrController.retrieveData);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: gtr
 *   description: Data retrieval from MongoDB
 *
 */
/**
 * @swagger
 * /retriveDataByFilter:
 *   post:
 *     summary: Return records from MongoDB
 *     description: Return records with given date and count parameters
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - minCount
 *               - maxCount
 *               - startDate
 *               - endDate
 *             properties:
 *               minCount:
 *                 type: number
 *               maxCount:
 *                 type: number
 *               startDate:
 *                 type: string
 *                 format: Date
 *                 description: Date with “YYYY-MM-DD” format
 *               endDate:
 *                 type: string
 *                 format: Date
 *                 description: Date with “YYYY-MM-DD” format
 *             example:
 *               minCount: 2700
 *               maxCount: 2900
 *               startDate: 2016-01-26
 *               endDate: 2018-02-02
 *     responses:
 *       "200":
 *         description: A list of records.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   example: 0
 *                 message:
 *                   type: string
 *                   example: success
 *                 records:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       key:
 *                         type: string
 *                         description: The key of record.
 *                         example: xyZ205s
 *                       createdAt:
 *                         type: string
 *                         description: Creation date of record.
 *                         example: 2017-01-28T01:22:14.398Z
 *                       totalCount:
 *                         type: integer
 *                         description: Total number of count array values.
 *                         example: 55
 *       "404":
 *         description: Error message.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: No Record Found
 */
