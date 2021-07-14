const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('if using uppercase with (example) will return (EXAMPLE)', (done) => {
  uppercase('example', (string) => {
    expect(string).toBe('EXAMPLE');
    done();
  });
});