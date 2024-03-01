import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only one first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class ands mods', () => {
        const expectedResult = 'someClass active converted';

        expect(classNames('someClass', { converted: true }, ['active'])).toBe(expectedResult);
    });

    test('with mods undefined', () => {
        const expectedResult = 'someClass active';

        expect(classNames('someClass', { converted: undefined }, ['active'])).toBe(expectedResult);
    });
});
