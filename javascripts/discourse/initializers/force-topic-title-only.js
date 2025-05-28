import { apiInitializer } from 'discourse/lib/api';
import SubcategoryBar from '../components/subcategory-bar';

export default apiInitializer('1.14.0', (api) => {
    
    api.routeTitle((currentRoute) => {
      console.log(currentRoute);
    if (currentRoute.name === "topic") {
      return currentRoute.model.title;
    }
    return null;
  });
});