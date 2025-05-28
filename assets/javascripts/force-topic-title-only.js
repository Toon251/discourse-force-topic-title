import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "force-topic-title-only",

  initialize(container) {
    withPluginApi("0.8.7", (api) => {
      api.modifyClass("controller:topic", {
        pluginId: "force-topic-title-only",

        get title() {
          // คืนค่าแค่หัวข้อกระทู้อย่างเดียว ไม่ต้องเอาหมวดหมู่และชื่อเว็บไซต์มาแสดง
          return this.model.title;
        }
      });
    });
  }
};