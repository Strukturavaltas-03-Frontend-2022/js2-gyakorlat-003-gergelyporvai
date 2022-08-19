import { j, l, f } from '../solutions/app2';

describe('2. feladat', () => {
    test('kell egy j változó unknown értékkel', () => {
        expect(j).toEqual('unknown');
    });
    
    test('kell egy l változó Doe értékkel', () => {
        expect(l).toEqual('Doe');
    });
    
    test('kell egy f változó John értékkel', () => {
        expect(f).toEqual('John');
    });
});
