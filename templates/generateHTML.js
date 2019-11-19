module.exports = function generateHTML(managerArr, engineerArr, internArr){
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<link rel="stylesheet" href="style.css">
    <title>Engineering Team</title>
    <style>body {
            background: #0075C4;
        }
        
        #header {
            padding: 50px;
            margin-bottom: 40px;
            padding-bottom: 40px;
            border-bottom: 10px solid rgb(0, 94, 177);
            text-align: center;
            font-size: 48px;
            color: rgba(0, 0, 0, .4);
            background: #0267C1;
        }
        
        .icon {
            position: relative;
            width: 36px;
            margin-left: 10px;
            padding-left: 6px;
            margin-right: 10px;
            top: -4px;
            opacity: 0.4;
        }
        
        .employee {
            position: relative;
            float: left;
            width: 400px;
        }
        
        .name {
            border-bottom: none;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            padding: 16px;
            padding-bottom: 0px;
            font-size: 36px;
            background: #D65108;
            color: rgba(0, 0, 0, .4)
        }
        
        .position {
            position: relative;
            padding-bottom: 10px;
            font-size: 30px;
            background: #D65108;
            color: rgba(0, 0, 0, .4)
        }
        
        .employeeInfo {
            background: #FCAB10;
            padding: 14px;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
        }
        
        .text {
            color: sienna;
            margin-bottom: 20px;
            font-size: 22px;
        }</style>
</head>

<body>
   
    <div id="header">Engineering Team</div>

<div class="container">
    
<div class="employee">
    <div class="name">${engineerArr[0].name}</div>
    <div class="position">
        <img class="icon" src="./icons/gear.png">Engineer
    </div>
    <div class="employeeInfo">
        <div class="id text">ID: ${engineerArr[0].id}</div>
        <div class="email text">Email: <br>${engineerArr[0].email}</div>
        <div class="relevantInfo text">Github: <a href="https://github.com/${engineerArr[0].github}">${engineerArr[0].github}</a></div>
    </div>
</div>

    
</div>
    
</body>
</html>`
    }