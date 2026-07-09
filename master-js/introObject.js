const car = {
    name:"mercedes benz",
    model:"GLE 400D",
    top_speed:"320 km/hr",

    engine_information:{
        cylinder:6,
        enginenumber:"132457"
    }.
    manufacturer:{
        name:"mercedes benz group",
        aka:"master car company",
        country:"germany"
    }.
    latestmodel:2025,

    alert_info:function() {
        alert('car:${car.name}
            model:${car.model}
            top_speed:${car.top_speed}
            '
        );
    }
};
