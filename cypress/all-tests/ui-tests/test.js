import Chance from 'chance'
//import {isSuperSet, intersection, union, difference} from "helper"
describe('UI Tests', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    it('Set1', () => {
        var currencySet = new Set();
        currencySet.add("USD");
        currencySet.add("UAH");
        currencySet.add("GBP");
        currencySet.add("CAN");
        currencySet.add("RUR");
        currencySet.add("EUR");
        currencySet.add("BYN");
        currencySet.add("U");
        currencySet.add("H");
        currencySet.add("P");
        currencySet.add("N");
        currencySet.add("UR");
        currencySet.add("EU");
        currencySet.add("BN");
        currencySet.delete("USD");
        currencySet.forEach(currency => {
            cy.log(currency)
        });
        cy.log("Set has USD value: " + currencySet.has('USD'));
        cy.log(JSON.stringify(chance.pickset([...currencySet], chance.integer({min: 1, max: currencySet.size}))));
    })

    it('Set2', () => {
        function isSuperset(set, subset) {
            for (var elem of subset) {
                if (!set.has(elem)) {
                    return false;
                }
            }
            return true;
        }

        function union(setA, setB) {
            var _union = new Set(setA);
            for (var elem of setB) {
                _union.add(elem);
            }
            return _union;
        }

        function intersection(setA, setB) {
            var _intersection = new Set();
            for (var elem of setB) {
                if (setA.has(elem)) {
                    _intersection.add(elem);
                }
            }
            return _intersection;
        }

        function difference(setA, setB) {
            var _difference = new Set(setA);
            for (var elem of setB) {
                _difference.delete(elem);
            }
            return _difference;
        }

// Например
        var setA = new Set([1, 2, 3, 4]),
            setB = new Set([2, 3]),
            setC = new Set([3, 4, 5, 6]);


        cy.log(isSuperset(setA, setB));   // => true
        cy.log(...union(setA, setC));        // => Set [1, 2, 3, 4, 5, 6]
        cy.log(...intersection(setA, setC)); // => Set [3, 4]
        cy.log(...difference(setA, setC));   // => Set [1, 2]
    })

    it('Array', () => {
        cy.log("Задания 1-3");
        let planets = [
            {planet: "Mercury", radius: 2440, density: 5.43, distance: 0.395},
            {planet: "Venus", radius: 6052, density: 5.24, distance: 0.723},
            {planet: "Earth", radius: 6378, density: 5.52, distance: 1},
            {planet: "Mars", radius: 3396, density: 3.93, distance: 1.53},
            {planet: "Jupiter", radius: 71492, density: 1.33, distance: 5.21},
            {planet: "Saturn", radius: 60268, density: 0.69, distance: 9.551},
            {planet: "Uranus", radius: 25559, density: 1.27, distance: 19.213},
            {planet: "Neptune", radius: 24764, density: 1.64, distance: 30.07}
        ]
        var newLength = planets.push({planet: "SomeNewPlanet", radius: 24764, density: 1.64, distance: 30.07, solarSystem: false});
        //cy.log(`planet: ${planet.name}, radius: ${planet.radius}, density: ${planet.density}, distance:  ${planet.distance}`)
        let new_planets = planets.map(obj=> ({...obj, solarSystem: 'true'}));
        new_planets.forEach(planet => {
            cy.log(JSON.stringify(planet));
        })
        cy.log("Задание 4");
        var initialValue = 0;
        var sum = [...new_planets].reduce(
            (accumulator, currentValue) => accumulator + currentValue.radius,
            initialValue
        );
        cy.log(sum)

        cy.log("Задание 5");
        function getPlanetsWithDistance(item) {
            if (item.distance > 15) {
                return true;
            }
            return false;
        }
        let planets_ByDistance = new_planets.filter(getPlanetsWithDistance);
        cy.log("====Planets with distance > 5====")
        planets_ByDistance.forEach(planet => {
            cy.log(JSON.stringify(planet));
        })

        cy.log("Задание 6");
        let pos = new_planets.map(function(e) {
            return e.planet;
        }).indexOf('SomeNewPlanet');
        //cy.log(pos);
        new_planets.splice(pos,1)
        new_planets.forEach(planet => {
            cy.log(JSON.stringify(planet));
        })

        cy.log("Задание 7");
        new_planets.sort(function (c,d){
            if (c.radius < d.radius){
                return -1;
            }
            if (c.radius > d.radius){
                return 1;
            }
            return 0;
        })
        new_planets.forEach(planet => {
            cy.log(JSON.stringify(planet));
        })

        cy.log("Задание 8");
        new_planets.sort(function (a,b){
            if (a.planet < b.planet){
                return -1;
            }
            if (a.planet > b.planet){
                return 1;
            }
            return 0;
        })
        new_planets.forEach(planet => {
            cy.log(JSON.stringify(planet));
        })

        cy.log("Задание 9");
        cy.log(new_planets.length)

    })
})




