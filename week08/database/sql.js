import mysql from "mysql2"

const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week08',
        password: 'mysfv8458!',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

const promisePool = pool.promise();

export const selectSql =  {
    getEmployee : async () => {
        const [rows] = await promisePool.query(`select * from employee`);
        console.log(rows)
        return rows
    },
    getDepartment : async () => {
        const [rows] = await promisePool.query(`select * from department`);

        return rows
    },
}

export const insertSql = {
    setEmployee : async (data) => {
        const sql = `insert into employee values (
            "${data.Fname}", "${data.Minit}", "${data.Lname}", "${data.Ssn}", "${data.Bdate}",
            "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}")`;
        
            await promisePool.query(sql);

    },

    setDepartment :  async (data) => {
        const sql = `insert into department values (
            "${data.Dname}", "${data.Dnumber}", "${data.Mgr_ssn}", "${data.Mgr_start_date}")`;
        
            await promisePool.query(sql);
    },
}

export const updateSql = {
    updateEmployee : async (data) => {
        const sql = `update employee set salary = ${data.Salary} where Ssn = "12171789"`;
        await promisePool.query(sql);

    },
    updateDepartment : async (data) => {
        const sql = `update department set dname = "${data.Dname}" where Dnumber = 1`;
        await promisePool.query(sql);

    },
}