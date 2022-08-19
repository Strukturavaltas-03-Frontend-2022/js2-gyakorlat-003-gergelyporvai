# Object Destructuring

## NAGYON FONTOS!!!
- A könnyebb tesztelhetőség érdekében az elkészített függvényeket és változókat 
exportálni kell!
- Függvények esetén egy példa:
```javascript
export default objectsMerge;
```
- Változók esetén egy példa:
```javascript
export {
  firstName,
  lastName,
  job,
};
```

## 1. feladat
- A `solutions/app1.js` fájlban dolgozz!
- Adott az alábbi objektum:
```javascript
    const user = {
        firstName: 'John',
        lastName: 'Doe'
    };
```
- Mentsd el külön lastName, firstName és job változókba a fenti objektum 
property-jeit destructuring használatával!
- Ha valamelyik nincs megadva, akkor az érték legyen az "unknown" string!

## 2. feladat
- A `solutions/app2.js` fájlban dolgozz!
- Adott az alábbi objektum:
```javascript
    const user = {
        firstName: 'John',
        lastName: 'Doe'
    };
```
- Mentsd el külön `l`, `f` és `j` változókba a fenti objektum lastName, firstName és job property-jeit! 
- Ha valamelyik nincs megadva, akkor az érték legyen az "unknown" string!

## 3. feladat
- A `solutions/app3.js` fájlban dolgozz!
- Mentsd el külön `a`, `b` és `c` nevű változókba az alábbi tömb első, harmadik és ötödik indexű elemét!
```javascript 
    const names = ['John', 'Jane', 'Judith', 'Jennifer', 'Jeremiah', 'Johnny'];
```
