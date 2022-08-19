import { job, lastName, firstName } from '../solutions/app1';

describe('1. feladat', () => {
    test('kell egy job változó unknown értékkel', () => {
        expect(job).toEqual('unknown');
    });
    
    test('kell egy lastName változó Doe értékkel', () => {
        expect(lastName).toEqual('Doe');
    });
    
    test('kell egy firstName változó John értékkel', () => {
        expect(firstName).toEqual('John');
    });
});
