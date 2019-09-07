// @flow strict
import getContactHref from './get-contact-href';

test('getContactHref', () => {
  expect(getContactHref('twitter', '#')).toBe('https://www.twitter.com/#');
  expect(getContactHref('github', '#')).toBe('https://github.com/#');
  expect(getContactHref('email', '#')).toBe('mailto:#');
  expect(getContactHref('rss', '#')).toBe('#');
  expect(getContactHref('instagram', '#')).toBe('https://www.instagram.com/#');
  expect(getContactHref('facebook', '#')).toBe('https://www.facebook.com/#');
});