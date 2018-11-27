generateErrorHtml test jsdom

describe('Items are generated correctly when API response is 200', () => {
  const successURL = 'url'

  nock(successURL)
    .get('/users/1')
    .reply(200, {
      _id: '123ABC',
      _rev: '946B7D1C',
      username: 'pgte',
      email: 'pedro.teixeira@gmail.com'
     });
})

describe('Error message is generated correctly when API response is 400', () => {
  const failureURL = 'url';

  const generateErrorHtml = () => 'error';

  nock(failureURL)
    .get('/users/1')
    .reply(400, {
      _id: '123ABC',
      _rev: '946B7D1C',
      username: 'pgte',
      email: 'pedro.teixeira@gmail.com'
     });

  expect(myRequest).toBe('error')
})
