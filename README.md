# 2021-02-database
## 3주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:hojun-Park/2021-02-database.git
    - (token을 사용하는 경우) git clone https://github.com/hojun-Park/2021-02-database.git
2. week03 폴더로 이동
    > cd week03
3. 콘솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)
<pre>
<code>
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root', // 본인이 만든 데이터베이스 이름
        password: 'password', // 본인의 mysql password
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);
</code>
</pre>

5. 서버 실행(powershell에서 ) 후 확인
    - npm run start
    - 브라우저를 켜서 주소창에 localhost:3000 입력
6. 기본 화면
    - (데이터베이스 설정이 된 경우) localhost:3000으로 들어가면 DB에 있는 값을 불러와서 출력

<br>

## <span style="color:red">3주차 테이블 작성법</span>

<span>student 테이블</span>
studentID|studentName|studentGrade|studentDepartment|studentEmail
---|---|---|---|---|
12123456|김철수|4|정보통신공학과|철수@gmail.com|
12211234|홍길동|1|정보통신공학과|길동@gmail.com|

<br>

## 8주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:hojun-Park/2021-02-database.git
    - (token을 사용하는 경우) git clone https://github.com/hojun-Park/2021-02-database.git
2. week08 폴더로 이동
    > cd week08
3. 콘솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)
<pre>
<code>
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root', // 본인이 만든 데이터베이스 이름
        password: 'password', // 본인의 mysql password
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);
</code>
</pre>

5. 서버 실행(powershell에서 ) 후 확인
    - npm run start
    - 브라우저를 켜서 주소창에 localhost:3000 입력
6. 기본 화면
    - (데이터베이스 설정이 된 경우) localhost:3000/select로 들어가면 DB에 있는 값을 불러와서 출력

<br>

## <span style="color:red">8주차 테이블 작성법</span>
<span>employee 테이블</span>
Fname|Minit|Lname|Ssn|Bdate|Address|Sex|Salary|Super_ssn|Dno|
---|---|---|---|---|---|---|---|---|---|
희|영|김|12121212|2001-10-10|인천|여|2500| |1|
은|지|이|12121213|2002-10-13|서울|여|1500|12121212|1|

<span>department 테이블</span>
Dname|Dnumber|Mgr_ssn|Mgr_start_date|
---|---|---|---|
인사부|1|12121212|2010-10-10|
회계부|2|12171789|2000-08-01|
경리부|3|12121214|1990-08-01|


<br>

## 10주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:hojun-Park/2021-02-database.git
    - (token을 사용하는 경우) git clone https://github.com/hojun-Park/2021-02-database.git
2. week10 폴더로 이동
    > cd week10
3. 콘솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)
<pre>
<code>
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root', // 본인이 만든 데이터베이스 이름
        password: 'password', // 본인의 mysql password
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);
</code>
</pre>

5. 서버 실행(powershell에서 ) 후 확인
    - npm run start
    - 브라우저를 켜서 주소창에 localhost:3000 입력
6. 기본 화면
    - (데이터베이스 설정이 된 경우) localhost:3000/select로 들어가면 DB에 있는 값을 불러와서 출력

<br>

## <span style="color:red">10주차 테이블 작성법</span>
<span>department 테이블</span>
Dname|Dnumber|
---|---|
전기공학과|2|
전자공학과|3|
정보통신공학과|0|
컴퓨터공학과|1|

<br>

<span>project 테이블</span>
Pname|Pnumber|
---|---|
4족 보행 로봇 제작|1|
자율주행 자동차 제작|3|
인공지능 스피커 제작|2|
쇼핑몰 앱 제작|4|
데이터베이스 ERD 설계|5|

## 텍스트 강조
- **데이터베이스** 실습은 재미 ~~없어요~~있어요.
