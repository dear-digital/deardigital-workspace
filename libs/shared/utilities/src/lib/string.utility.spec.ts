import { removeForbiddenIdChars } from './string.utility';

describe('String utility', () => {
  it('should remove forbidden id characters', () => {
    const idWithForbiddenChar = 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzE3ODc3NzU1NDk3OA==';
    const id = 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzE3ODc3NzU1NDk3OA';
    expect(removeForbiddenIdChars(idWithForbiddenChar)).toEqual(id);
  });
});
