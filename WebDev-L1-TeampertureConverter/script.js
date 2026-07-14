const temperature = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", function () {

    let value = parseFloat(temperature.value);

    if (isNaN(value)) {
        result.innerHTML = "Enter a valid temperature";
        return;
    }

    let celsius;

    if (fromUnit.value === "celsius") {
        celsius = value;
    }

    else if (fromUnit.value === "fahrenheit") {
        celsius = (value - 32) * 5 / 9;
    }

    else if (fromUnit.value === "kelvin") {
        celsius = value - 273.15;
    }

    let output;

    if (toUnit.value === "celsius") {
        output = celsius;
    }

    else if (toUnit.value === "fahrenheit") {
        output = (celsius * 9 / 5) + 32;
    }

    else if (toUnit.value === "kelvin") {
        output = celsius + 273.15;
    }

    result.innerHTML = output.toFixed(2) + " °";
});

document.querySelector("button[type='reset']").addEventListener("click", function () {

    result.innerHTML = "0.00 °F";

});