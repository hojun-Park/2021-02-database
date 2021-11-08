import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router(); //라우터 객체를 참조한다.

router.get('/', async (req, res) => {
    const department = await selectSql.getDepartment(); // department 테이블로부터 받아온 데이터들을 department 변수에 저장한다.
    const project = await selectSql.getProject();  // project 테이블로부터 받아온 데이터들을 project 변수에 저장한다.

    res.render('select', {
        title: 'IT 공대',
        department,

        title2: '프로젝트 목록',
        project
    }); // select.hbs의 html 정보를 /select 페이지에 그린다. 여기서 department와 project 변수에 저장된 departmnet와 project 각각의 테이블의 데이터들을 받아와 페이지에 그린다.  
});

module.exports = router; // module.exports가 router 객체를 참조하도록한다.