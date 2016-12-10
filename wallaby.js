module.exports = function () {
  return {
    files: [
      { pattern: 'src/**/*.ts' },
      { pattern: 'src/**/*.[sS]pec.ts', ignore: true}
    ],

    tests: [
      'src/**/*.[sS]pec.ts'
    ],

    env: {
      type: 'node'
    },

    testFramework: 'jasmine'
  };
};
