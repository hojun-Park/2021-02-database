import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();//라우터 객체를 참조한다.

router.get('/', async (req, res) => {
    const department = await selectSql.getDepartment(); // department 테이블로부터 받아온 데이터들을 department 변수에 저장한다.
    const project = await selectSql.getProject(); // project 테이블로부터 받아온 데이터들을 project 변수에 저장한다.

    res.render('delete', {
        title: "부서 삭제 기능",
        department,

        title2: "프로젝트 삭제 기능",
        project
    }) // delete.hbs의 html 정보를 /delete 페이지에 그린다. 여기서 department와 project 변수에 저장된 departmnet와 project 각각의 테이블의 데이터들을 받아와 페이지에 그린다.  
});

router.post('/', async (req, res) => {
    console.log('delete router:', req.body.delBtn1);
    console.log('delete router:', req.body.delBtn2);

    const data1 = {
        Dnumber: req.body.delBtn1,
    }; // delete.hbs에서 department 테이블에 해당하는 delBtn1을 눌렀을 때 누른 행의 Dnumber를 data1.Dnumber에 저장한다.

    const data2 = {
        Pnumber: req.body.delBtn2,
    }; // delete.hbs에서 project 테이블에 해당하는 delBtn2를 눌렀을 때 누른 행의 Pnumber를 data2.Pnumber에 저장한다.

    if(data1.Dnumber!=null){
        await deleteSql.deleteDepartment(data1);
    } // department 테이블의 Dnumber에 해당하는 값이 data1.Dnumber에 넘어와 저장되면 해당 Dnumber에 해당하는 데이터를 삭제한다.
    if(data2.Pnumber!=null){
        await deleteSql.deleteProject(data2);
    } // project 테이블의 Pnumber에 해당하는 값이 data2.Pnumber에 넘어와 저장되면 해당 Pnumber에 해당하는 데이터를 삭제한다.
    

    res.redirect('/delete'); // /delete 페이지로 이동한다.
});

module.exports = router; // module.exports가 router 객체를 참조하도록한다.