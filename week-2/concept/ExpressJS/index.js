const { json } = require("body-parser");
const express = require("express");
const app = express();

const users = [{
    name: "John",
    kidneys: [{
        healthy: true
    },{
        healthy: true
    }]
}];

app.use(express.json());

//GET request
app.get('/', function(req, res){

    let numberOfKidneys = users[0].kidneys.length;

    let numberOfHealthyKidneys = 0;
    for(let i=0; i<numberOfKidneys; i++){
        if(users[0].kidneys[i].healthy)  //value is already true or false
            numberOfHealthyKidneys++;
    }

    let numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

//POST request
app.post('/set', function(req, res){

    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg : "Done!"
    })
})

//PUT request
app.put('/update', function(req, res){
    //making all the inhealthy kidney , healthy.
    for(let i=0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy)
            users[0].kidneys[i].healthy = true;
    }

    res.json({
        msg: "Done!"
    })
})

//Delete request
app.delete('/removed', function(req, res){
    //remove all the other kidney if more than 2.
    let newKidney = [];
    if(countKidney() > 2){
        let n = 2;
        while(n--){
            newKidney.push({
                healthy : true
            })
        }

        users[0].kidneys = newKidney;
        res.json({
            msg: "all set, Done!"
        })
    }
    else{
        res.status(200).json({
            msg : "your all kidneys are fine"
        })
    }
})

function countKidney(){
    return users[0].kidneys.length;
}


app.listen(3000, () => {
    console.log("Port start ",3000);
});

