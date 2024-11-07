const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI')




//TODO Unit Tests to implement
describe("fahrenheitToCelsius()", function(){
    
    //  if needed logic before each test run
    beforeEach(function () {
        
    })

    // test a functionality
    
        it('show transform Celsius to Fahrenheit', function () {
            const gradCelsius = 0
           const expFahrenheit = 32;
           const ergCelsius = apiTemperature.celsiusToFahrenheit(gradCelsius);
            //assert.equal(erg,71.6); -> Funktionierte nicht.
           expect(ergCelsius).to.equal(expFahrenheit)
            
        })
    

    it('show transform Fahrenheit to Celsius', function () {
        const fahrenheit = 32;
        const expCelsius = 0;
        const ergFahrenheit = apiTemperature.fahrenheitToCelcius(fahrenheit);
        // assert.equal(erg,22); -> Funktionierte nicht.
         expect(ergFahrenheit).to.equal(expCelsius)
        
     })


     it('GreetingsCorrect', function () {
        const myTime= '06:00';
        const date = new Date('2020-01-01 '+myTime)
        const expectedGreeting = "Guten Abend";
        const gruesse = apiTemperature.getGreetingDependOnTime(date);
        expect(expectedGreeting).to.equal(gruesse);
        
     })
});