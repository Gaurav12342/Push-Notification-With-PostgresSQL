import { Request, Response } from 'express';
import { pool } from '../database/dbservice';

export const getAllEmployee = async function (req: Request, res: Response) {
  try {
    let result = await pool.query(`SELECT * from employee`);
    console.log('result =>', result);
    let data = result.rows;
    res.json({
      data,
    });
  } catch (e: any) {
    res.status(413).json({
      message: 'Error Occurred',
      error: e.toString(),
    });
  }
};
