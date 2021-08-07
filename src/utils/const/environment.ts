export const ENV = {
  development: {
    host: process.env.REACT_APP_DEVELOPMENT_HOST,
    app_name: process.env.REACT_APP_NAME,
  },
  test: {
    host: process.env.REACT_APP_TEST_HOST,
    app_name: process.env.REACT_APP_NAME,
  },
}
