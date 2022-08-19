import { a, b, c } from '../solutions/app3';

describe('3. feladat', () => {
    test('kell egy a változó Jane értékkel', () => {
        expect(a).toEqual('Jane');
    });
    
    test('kell egy b változó Jennifer értékkel', () => {
        expect(b).toEqual('Jennifer');
    });
    
    test('kell egy c változó Johnny értékkel', () => {
        expect(c).toEqual('Johnny');
    });
});
