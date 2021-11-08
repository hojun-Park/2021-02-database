import mysql from "mysql2";

// 데이터베이스 연결
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'root',
    database: 'week10',
    password: 'mysfv8458!',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }
); // 내 PC의 week10이라는 local database와 연동하게한다.

const promisePool = pool.promise();

// select query
export const selectSql = {
  getUsers : async () => {
    const [rows] = await promisePool.query(`select * from user`);

    return rows
  },
  getDepartment : async () => {
    const [rows] = await promisePool.query(`select * from department`);

    return rows
  },

  getProject : async () => {
    const [rows] = await promisePool.query(`select * from project`);

    return rows
  },
} // select 쿼리문을 이용하여 user, department, project 테이블의 모든 데이터들을 받아와서 각각을 selectSql.getUsers, selectSql.getDepartment, selectSql.Project 함수를 통해 데이터 각 행을 return하게 한다.

//delete query
export const deleteSql = {
  deleteDepartment : async (data1) => {
    console.log('deleteSql.deleteDepartment:', data1.Dnumber);
    const sql = `delete from department where Dnumber=${data1.Dnumber}`;

    await promisePool.query(sql);
  },

  deleteProject : async (data2) => {
    console.log('deleteSql.deleteProject:', data2.Pnumber);
    const sql = `delete from Project where Pnumber=${data2.Pnumber}`;

    await promisePool.query(sql);
  },
} // delete 쿼리문을 이용하여 department, project 테이블의 데이터를 where 문의 조건에 따라 해당 데이터를 삭제하도록 하는 deleteSql.deleteDepartment, deleteSql.deleteProject 함수를 정의하였다.