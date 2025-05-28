import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "topic-title-only",

  initialize() {
    withPluginApi("0.8.7", (api) => {
      api.routeTitle((currentRoute) => {
        // ตรวจสอบว่าเป็น route ของ topic
        if (currentRoute.name === "topic") {
          // คืนค่าแค่ชื่อหัวข้อกระทู้
          return currentRoute.model.title;
        }
        // ปล่อยให้ route อื่นๆ ใช้งานชื่อ default
        return null;
      });
    });
  },
};