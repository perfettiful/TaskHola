describe('Canary test', () => {
    it('should pass', () => {
      expect(true).toBe(true);
    });
  
    it('should render the app without crashing', () => {
      const App = require('../App').default;
      const renderer = require('react-test-renderer');
      const tree = renderer.create(<App />).toJSON();
      expect(tree).toBeTruthy();
    });
  });
  