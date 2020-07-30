const subPalin = require('./index');

test('El subpalíndromo más largo de AaAAAA es AAAA', () => {
    expect(subPalin('AaAAAA')).toBe('AAAA');
});

test('El subpalíndromo más largo de 1234 es 1', () => {
    expect(subPalin('1234')).toBe('1');
});

test('El subpalíndromo más largo de aabbaa123 es aabbaa', () => {
    expect(subPalin('aabbaa123')).toBe('aabbaa');
});

test('El subpalíndromo más largo de (empty) es (empty)', () => {
    expect(subPalin('')).toBe('');
});

test('El subpalíndromo más largo de aabbaaaabbbaaaa es aaaabbbaaaa', () => {
    expect(subPalin('aabbaaaabbbaaaa')).toBe('aaaabbbaaaa');
});