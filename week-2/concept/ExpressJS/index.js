const express = require("express");
const app = express();

//ChatGPT Logic
function appLogic(input) {
    let ans = 5;
    for(let i = 0; i < input; i++) {
        ans += i;
    }
    return ans;
}

app.get("/", function(req, res){

    let input = req.query.input;
    const result = appLogic(input);

    res.send("Result : " + result);
});

app.listen(3000);