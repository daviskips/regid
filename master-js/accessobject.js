const car = {
    name:"mercedes benz",
    model:"GLE 400D",
    top_speed:"320 km/hr",

    engine_information:{
        cylinder:6,
        enginenumber:"132457"
    },
    manufacturer:{
        name:"mercedes benz group",
        aka:"master car company",
        country:"germany"
    },
    latestmodel:2025,

    alert_info:function() {
        alert('car:${car.name}
            model:${car.model}
            top_speed:${car.top_speed}
            '
        );
    }
};


console.log('car datatype ${typeof car}');
console.log(car);
console.log("--using console.log(table)--");
console.table(car);


console.log('name is ${car.name} its type is ${type of car.name}');
console.log('name is ${car["name]} its type is ${typeof car["name"]}');
console.log('model is ${car.model} its type is ${typeof car.model}');

let v1 = "model";
console.log('mode1 is ${car[v1]} its type is ${typeof car[v1]}');
