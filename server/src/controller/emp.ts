import { Request, Response } from 'express';
import { pool } from '../database/dbservice';
import { sendNotif } from '../firebase/sendNotif';

export const getAllEmployee = async function (req: Request, res: Response) {
  try {
    let result = await pool.query(`SELECT * from employee`);
    let data = result.rows;

    let token =
      'ezlFqAgLSYxiZPz4rDoRVF:APA91bFRhdI2kaYGOwXWsc3xBMxbyA-XMopaDl9Rq0b9YC8r0CWfpiaaWb6zpY38FKdshqDKbsqi5X9dz4WrJ_HLKFmVC_uN6ren_dVaFBrxu4ssGxwNoUdfos9apH5WCpRUfQeuJ0Kj'; // Replace with the actual FCM token
    await sendNotif(token, 'Employee', `Get all employee successfully.`);

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

export const addEmployee = async function (req: Request, res: Response) {
  try {
    const { f_name, l_name, address, email, gender } = req.body;
    pool.query(
      'INSERT INTO employee (f_name, l_name, address, email, gender) VALUES ($1, $2, $3, $4, $5)',
      [f_name, l_name, address, email, gender],
      async (error, results) => {
        if (error) {
          throw error;
        }

        let token =
          'ezlFqAgLSYxiZPz4rDoRVF:APA91bFRhdI2kaYGOwXWsc3xBMxbyA-XMopaDl9Rq0b9YC8r0CWfpiaaWb6zpY38FKdshqDKbsqi5X9dz4WrJ_HLKFmVC_uN6ren_dVaFBrxu4ssGxwNoUdfos9apH5WCpRUfQeuJ0Kj'; // Replace with the actual FCM token
        await sendNotif(token, 'Employee', `Get all employee successfully.`);

        res.status(201).send('Employee added');
      }
    );
  } catch (e: any) {
    res.status(413).json({
      message: 'Error Occurred',
      error: e.toString(),
    });
  }
};

export const updateEmployee = async function (req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { f_name, l_name, address, email, gender } = req.body;
    pool.query(
      'UPDATE employee SET f_name = $1, l_name = $2, address = $3, email = $4, gender = $5 WHERE id = $6',
      [f_name, l_name, address, email, gender, id],
      async (error, results) => {
        if (error) {
          throw error;
        }

        let token =
          'ezlFqAgLSYxiZPz4rDoRVF:APA91bFRhdI2kaYGOwXWsc3xBMxbyA-XMopaDl9Rq0b9YC8r0CWfpiaaWb6zpY38FKdshqDKbsqi5X9dz4WrJ_HLKFmVC_uN6ren_dVaFBrxu4ssGxwNoUdfos9apH5WCpRUfQeuJ0Kj'; // Replace with the actual FCM token
        await sendNotif(token, 'Employee', `Get all employee successfully.`);

        res.status(200).send('Employee update');
      }
    );
  } catch (e: any) {
    res.status(413).json({
      message: 'Error Occurred',
      error: e.toString(),
    });
  }
};

export const deleteEmployee = async function (req: Request, res: Response) {
  try {
    const { id } = req.params;
    pool.query(
      'DELETE FROM employee WHERE id = $1',
      [id],
      async (error, results) => {
        if (error) {
          throw error;
        }

        let token =
          'ezlFqAgLSYxiZPz4rDoRVF:APA91bFRhdI2kaYGOwXWsc3xBMxbyA-XMopaDl9Rq0b9YC8r0CWfpiaaWb6zpY38FKdshqDKbsqi5X9dz4WrJ_HLKFmVC_uN6ren_dVaFBrxu4ssGxwNoUdfos9apH5WCpRUfQeuJ0Kj'; // Replace with the actual FCM token
        await sendNotif(token, 'Employee', `Get all employee successfully.`);

        res.status(200).send('Employee delete');
      }
    );
  } catch (e: any) {
    res.status(413).json({
      message: 'Error Occurred',
      error: e.toString(),
    });
  }
};

export const getByIdEmployee = async function (req: Request, res: Response) {
  try {
    const { id } = req.params;
    pool.query(
      'SELECT * FROM employee WHERE id = $1',
      [id],
      async (error, results) => {
        if (error) {
          throw error;
        }

        let token =
          'ezlFqAgLSYxiZPz4rDoRVF:APA91bFRhdI2kaYGOwXWsc3xBMxbyA-XMopaDl9Rq0b9YC8r0CWfpiaaWb6zpY38FKdshqDKbsqi5X9dz4WrJ_HLKFmVC_uN6ren_dVaFBrxu4ssGxwNoUdfos9apH5WCpRUfQeuJ0Kj'; // Replace with the actual FCM token
        await sendNotif(token, 'Employee', `Get all employee successfully.`);

        res.status(200).json({
          data: results.rows[0],
        });
      }
    );
  } catch (e: any) {
    res.status(413).json({
      message: 'Error Occurred',
      error: e.toString(),
    });
  }
};
