import LimitedStorage from "./LimitedStorage";

it('one item', () => {
    const storage = new LimitedStorage(1);
    expect(storage.size()).toBe(0);
    storage.add('test', 'OK');
    expect(storage.size()).toBe(1);
    expect(storage.get('test')).toBe('OK');
})
it('cleanup on limit exceed', () => {
    const storage = new LimitedStorage(2);

    storage.add('id-1', 'value-1');
    storage.add('id-2', 'value-2');

    expect(storage.get('id-1')).toBe('value-1');
    expect(storage.get('id-2')).toBe('value-2');
    expect(storage.get('id-3')).toBe(undefined);

    storage.add('id-3', 'value-3');

    expect(storage.get('id-1')).toBe(undefined);
    expect(storage.get('id-2')).toBe('value-2');
    expect(storage.get('id-3')).toBe('value-3');
})