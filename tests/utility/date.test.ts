import formatNoteCardDate from '../../src/utility/date';

describe('date', () => {
  test('should format date correctly', () => {
    expect(formatNoteCardDate('2024-10-29T10:15:00Z')).toBe('29 Oct 2024');
  });

  test('should return error if given empty string', () => {
    try {
      formatNoteCardDate('');
    } catch(e) {
      const { message } = e as Error;
      expect(message).toBe('Invalid date value given');
    }
  });
});