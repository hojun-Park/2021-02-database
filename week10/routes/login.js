import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router(); //라우터 객체를 참조한다.

router.get('/', (req, res) => {
    res.render('login');
}); // login.hbs의 html 정보를 / 페이지에 그린다.

router.post('/', async (req, res) => {
    const vars = req.body;
    const users = await selectSql.getUsers(); // select 쿼리 문을 통해 user 테이블의 데이터들을 users라는 변수에 저장한다.
    let whoAmI = ''; // 누가 로그인을 했는지 해당 id를 저장하는 whoAmI라는 변수 선언한다.
    let checkLogin = false; // 로그인 성공여부용 checkLogin이라는 변수 선언한다.

    //for(let i=0l i<users.length; i++){
    //    if(vars.id === user[i].id && vars.password === user[i].password){
    //        ;
    //    }
    //} // 구닥다리 문법
    
    users.map((user) => { // function (user)
        console.log(user.Id);
        if (vars.id === user.Id && vars.password === user.Password){ 
            console.log('login success!');
            checkLogin = true; // 로그인 창에 입력한 id와 password가 user 테이블의 데이터 정보와 일치한다면 로그인이 가능하도록 구현하였다.
            if(vars.id === 'admin'){
                whoAmI = 'admin'; // 로그인 후 id가 admin으로 로그인했다면 whoAmI라는 변수에 admin을 저장한다.
            } else {
                whoAmI = 'user';
            } // 로그인 후 그 외 id로 로그인했다면 whoAmI라는 변수에 user를 저장한다.
        } 
    })

    if(checkLogin && whoAmI === 'admin'){
        res.redirect('/delete'); // 로그인을 id가 admin의 user로 하여 성공한다면 /delete 페이지로 이동한다.
    } else if (checkLogin && whoAmI === 'user'){
        res.redirect('/select'); // 로그인을  id가 그외의 user로 하여 성공한다면 /select 페이지로 이동한다.
    } else{
        console.log('login failed');
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>");
    } // 그 외 로그인이 실패한다면 alert 창으로 '로그인에 실패했습니다' 라는 메세지를 출력한다.
})

module.exports = router; // module.exports가 router 객체를 참조하도록한다.