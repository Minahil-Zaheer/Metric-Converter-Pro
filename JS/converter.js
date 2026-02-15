//      =====================================================
//    CONVERSION FACTORS
//    Base units are used for accurate conversion
//    ===================================================== 

var conversionFactors = {

    // Length units (base unit: meter)
    length: {
        millimeters: 0.001,
        centimeters: 0.01,
        meters: 1,
        kilometers: 1000,
        inches: 0.0254,
        feet: 0.3048,
        yards: 0.9144,
        miles: 1609.34
    },

    // Area units (base unit: square meter)
    area: {
        squareMillimeters: 0.000001,
        squareCentimeters: 0.0001,
        squareMeters: 1,
        hectares: 10000,
        squareKilometers: 1000000,
        squareInches: 0.00064516,
        squareFeet: 0.092903,
        squareYards: 0.836127,
        acres: 4046.86,
        squareMiles: 2589988.11
    },

    // Volume units (base unit: liter)
    volume: {
        milliliters: 0.001,
        liters: 1,
        cubicMeters: 1000,
        fluidOunces: 0.0295735,
        cups: 0.236588,
        pints: 0.473176,
        quarts: 0.946353,
        gallons: 3.78541,
        cubicFeet: 28.3168,
        cubicYards: 764.555
    },

    // Mass units (base unit: kilogram)
    mass: {
        milligrams: 0.000001,
        grams: 0.001,
        kilograms: 1,
        metricTons: 1000,
        ounces: 0.0283495,
        pounds: 0.453592,
        shortTons: 907.185,
        longTons: 1016.05
    }
};

/* =====================================================
   CURRENCY RATES
   All currencies are compared with USD
   ===================================================== */

   var currencyRates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    JPY: 149.50,
    CNY: 7.24,
    CAD: 1.35,
    AUD: 1.52,
    CHF: 0.88,
    INR: 83.12,
    MXN: 17.05,
    BRL: 4.97,
    ZAR: 18.65
};

// =====================================================
//    GENERAL CONVERSION FUNCTION
//    Used for length, area, volume, and mass
//    =====================================================

   function convert(value, fromUnit, toUnit, unitData){
    var basevalue = value * unitData[fromUnit];
    var finalValue = basevalue / unitData[toUnit];
    return finalValue;
   }

//    temperature conversion
     function convertTemperature(value, fromUnit, toUnit){
        var celsius;

    if (fromUnit === "celsius") {
        celsius = value;
    } else if (fromUnit === "fahrenheit") {
        celsius = (value - 32) * 5 / 9;
    } else if (fromUnit === "kelvin") {
        celsius = value - 273.15;
    }

    if (toUnit === "celsius") {
        return celsius;
    } else if (toUnit === "fahrenheit") {
        return (celsius * 9 / 5) + 32;
    } else if (toUnit === "kelvin") {
        return celsius + 273.15;
    }

     }
      
    //  currency converter

    function convertCurrency(value, fromCurrency, toCurrency) {
    var valueInUSD = value / currencyRates[fromCurrency];
    var finalAmount = valueInUSD * currencyRates[toCurrency];
    return finalAmount;
}
// format number

function formatNumber(number) {

    if (Math.abs(number) >= 1000000) {
        return number.toExponential(6);
    } 
    else if (Math.abs(number) < 0.001 && number !== 0) {
        return number.toExponential(6);
    } 
    else {
        return number.toFixed(8).replace(/\.?0+$/, "");
    }
}

// length converter 

var lengthForm = document.getElementById("lengthConverterForm");

if (lengthForm) {
    lengthForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var value = parseFloat(document.getElementById("lengthValue").value);
        var fromUnit = document.getElementById("lengthFrom").value;
        var toUnit = document.getElementById("lengthTo").value;

        var result = convert(value, fromUnit, toUnit, conversionFactors.length);

        document.getElementById("lengthResultValue").textContent =
            formatNumber(result) + " " + getUnitSymbol(toUnit, "length");

        document.getElementById("lengthResult").style.display = "block";
    });
}

// area converter

var areaForm = document.getElementById("areaConverterForm");

if (areaForm) {
    areaForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var value = parseFloat(document.getElementById("areaValue").value);
        var fromUnit = document.getElementById("areaFrom").value;
        var toUnit = document.getElementById("areaTo").value;

        var result = convert(value, fromUnit, toUnit, conversionFactors.area);

        document.getElementById("areaResultValue").textContent =
            formatNumber(result) + " " + getUnitSymbol(toUnit, "area");

        document.getElementById("areaResult").style.display = "block";
    });
}

// volume converter

var volumeForm = document.getElementById("volumeConverterForm");

if (volumeForm) {
    volumeForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var value = parseFloat(document.getElementById("volumeValue").value);
        var fromUnit = document.getElementById("volumeFrom").value;
        var toUnit = document.getElementById("volumeTo").value;

        var result = convert(value, fromUnit, toUnit, conversionFactors.volume);

        document.getElementById("volumeResultValue").textContent =
            formatNumber(result) + " " + getUnitSymbol(toUnit, "volume");

        document.getElementById("volumeResult").style.display = "block";
    });
}

// mass converter

var massForm = document.getElementById("massConverterForm");

if (massForm) {
    massForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var value = parseFloat(document.getElementById("massValue").value);
        var fromUnit = document.getElementById("massFrom").value;
        var toUnit = document.getElementById("massTo").value;

        var result = convert(value, fromUnit, toUnit, conversionFactors.mass);

        document.getElementById("massResultValue").textContent =
            formatNumber(result) + " " + getUnitSymbol(toUnit, "mass");

        document.getElementById("massResult").style.display = "block";
    });
}

// temperature converter

var temperatureForm = document.getElementById("temperatureConverterForm");

if (temperatureForm) {
    temperatureForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var value = parseFloat(document.getElementById("temperatureValue").value);
        var fromUnit = document.getElementById("temperatureFrom").value;
        var toUnit = document.getElementById("temperatureTo").value;

        var result = convertTemperature(value, fromUnit, toUnit);

        document.getElementById("temperatureResultValue").textContent =
            formatNumber(result) + " " + getUnitSymbol(toUnit, "temperature");

        document.getElementById("temperatureResult").style.display = "block";
    });
}

// currency converter

var currencyForm = document.getElementById("currencyConverterForm");

if (currencyForm) {
    currencyForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var value = parseFloat(document.getElementById("currencyValue").value);
        var fromCurrency = document.getElementById("currencyFrom").value;
        var toCurrency = document.getElementById("currencyTo").value;

        var result = convertCurrency(value, fromCurrency, toCurrency);
        var rate = currencyRates[toCurrency] / currencyRates[fromCurrency];

        document.getElementById("currencyResultValue").textContent =
            formatNumber(result) + " " + toCurrency;

        document.getElementById("currencyRate").textContent =
            "Exchange Rate: 1 " + fromCurrency + " = " + formatNumber(rate) + " " + toCurrency;

        document.getElementById("currencyResult").style.display = "block";
    });
}

// unit symbols

function getUnitSymbol(unit, type){
    var symbols = {
        length: {
            millimeters: "mm",
            centimeters: "cm",
            meters: "m",
            kilometers: "km",
            inches: "in",
            feet: "ft",
            yards: "yd",
            miles: "mi"
    },
        area: {
            squareMillimeters: "mm²",
            squareCentimeters: "cm²",
            squareMeters: "m²",
            hectares: "ha",
            squareKilometers: "km²",
            squareInches: "in²",
            squareFeet: "ft²",
            squareYards: "yd²",
            acres: "ac",
            squareMiles: "mi²"
        },

        volume: {
            milliliters: "mL",
            liters: "L",
            cubicMeters: "m³",
            fluidOunces: "fl oz",
            cups: "cup",
            pints: "pt",
            quarts: "qt",
            gallons: "gal",
            cubicFeet: "ft³",
            cubicYards: "yd³"
        },

        mass:{
            milligrams: "mg",
            grams: "g",
            kilograms: "kg",
            metricTons: "t",
            ounces: "oz",
            pounds: "lb",
            shortTons: "st",
            longTons: "lt"
        },

        temperature: {
            celsius: "°C",
            fahrenheit: "°F",
            kelvin: "K"
        }
};

    return symbols[type][unit];
}
