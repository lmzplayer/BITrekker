<template>
  <div class="rectangle-container">
    <label v-if="adim != 'UserCheck'" class="checkbox-container">
      <input type="checkbox" v-model="is_checked" />
      <span class="checkmark"></span>
    </label>
    <div class="rectangle">
      <editicon
        v-if="adim == 'CheckDelete' || adim == '1'"
        @click.native="jumpToEditPage"
        class="icon"
      />
      <div class="classroom-title">
        <h2>{{ info.affiliated_teaching_building }}</h2>
        <span></span>
        <h3>
          {{
            info.classroom_name.replace(info.affiliated_teaching_building, "")
          }}
        </h3>
      </div>
      <div class="classroom-time">
        <span>
          空闲时间：
          <span v-for="(time, index) in filteredTime" :key="time"
            >第{{ time + 1 }}节{{
              index == filteredTime.length - 1 ? "。" : "，"
            }}</span
          >
        </span>
      </div>
      <div class="classroom-features">
        <span v-for="feature in filteredFeatures" :key="feature">{{
          feature
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import editicon from "@/assets/editicon.vue";
export default {
  props: ["info", "index", "adim"],
  emit: ["jumpToEditPageB", "checkChange"],
  components: { editicon },
  data() {
    return {
      is_checked: false,
      flag: false,
      global_features: [
        "插座多",
        "离水房近",
        "离女厕近",
        "离男厕近",
        "空调可调节",
      ],
    };
  },
  methods: {
    jumpToEditPage() {
      console.log("classroom gets info" + JSON.stringify(this.info));
      this.$emit("jumpToEditPageB", this.info);
    },
    resetIsCheck() {
      this.flag = true;
      this.is_checked = false;
    },
  },
  created() {
    console.log("create stop " + this.flag);
  },
  computed: {
    filteredTime() {
      return this.info.free_time.detailed_time_period
        .map((value, index) => (value ? index : -1))
        .filter((index) => index !== -1);
    },
    filteredFeatures() {
      return this.global_features.filter(
        (value, index) => this.info.classroom_features[index]
      );
    },
  },
  watch: {
    is_checked(_new) {
      if (this.flag == false) this.$emit("checkChange", this.index, _new);
      else this.flag = false;
    },
  },
};
</script>

<style>
.checkbox-container {
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid #aeaeae;
  border-radius: 50%;
  margin-right: 2%;
}

.checkbox-container input[type="checkbox"] {
  opacity: 0;
  width: 0;
  height: 0;
}

.checkmark {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
}

.checkbox-container input[type="checkbox"]:checked + .checkmark {
  background-color: gray;
}

.rectangle-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3%;
  /* 容器的高度 */
}

.rectangle {
  position: relative;
  width: 80%;
  /* 矩形框的宽度 */
  height: fit-content;
  /* 矩形框的高度 */
  border-radius: 20px;
  border: 1px solid #aeaeae;
  padding-left: 3%;
  padding-bottom: 3%;
  padding-top: 1%;
}

.icon {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-25%, 25%);
  padding: 5px;
}

.classroom-title {
  position: relative;
  display: flex;
  justify-content: left;
  align-items: baseline;
  width: 40%;
}

.classroom-title h2 {
  display: inline-block;
}

.classroom-title span {
  display: inline-block;
  width: 8%;
}

.classroom-title h3 {
  display: inline-block;
}

.classroom-time {
  position: relative;
  display: flex;
  justify-content: left;
  align-items: baseline;
}

.classroom-features {
  position: relative;
  display: flex;
  justify-content: left;
  align-items: baseline;
}

.classroom-features span {
  display: inline-block;
  border-radius: 10px;
  border: 1px solid #aeaeae;
  padding: 5px 7px 5px 7px;
  margin-top: 2%;
  margin-right: 2%;
}
</style>