// This should give CORRECT on the default problem 'hello'.
//
// @EXPECTED_RESULTS@: CORRECT

if (process.env.DOMJUDGE === '1') {
  console.log('Hello world!');
} else {
  console.log('DOMJUDGE not defined');
  process.exit(1);
}
