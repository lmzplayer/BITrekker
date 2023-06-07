export function newaxios(){
    console.log('zaima')
    var axios = require('axios');
    var url = 'http://10.194.146.69/web_data_test/get_main_data'
    var data = JSON.stringify({
    "period": [
        1,
        1,
        1
    ],
    "date": "2023-05-31",
    "classroom_feature": [
        0,
        0,
        1
    ],
    "teaching_building": [
        "文萃楼"
    ]
    });

    var config = {
    method: 'post',
    url: url,
    headers: { 
        //'User-Agent': 'Apifox/1.0.0 (https://apifox.com)', 
        'Content-Type': 'application/json', 
        //'Accept': '*/*', 
        //'Host': '127.0.0.1:8000', 
        //'Connection': 'keep-alive'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
}
