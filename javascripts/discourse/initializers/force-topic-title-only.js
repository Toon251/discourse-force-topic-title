import { apiInitializer } from 'discourse/lib/api';


export default apiInitializer('1.14.0', (api) => {
    api.modifyClass("service:head-data", {
    pluginId: "custom-topic-title",

    customTopicTitle() {
      const currentRoute = this.router.currentRoute;
      
      // ตรวจสอบว่าอยู่ใน route topic และมี model กำหนด
      if (currentRoute && currentRoute.name === "topic" && currentRoute.model) {
        return currentRoute.model.title;
      }
      return null;
    },

    // override headTitle หรือ title getter
    get title() {
      console.log("get title");
      const customTitle = this.customTopicTitle();
      if (customTitle) {
        return customTitle;
      }
      // fallback ให้เรียก getter ต้นฉบับ
      return this._super(...arguments);
    }
  });
});