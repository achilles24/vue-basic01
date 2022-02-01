import Vue from "vue";

new Vue({
  data() {
    return {
      count: 0,
      name: "",
      items: ["item1", "item2", "item3"],
      fullname: "",
      lastname: ""
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    onKeyUp(event) {
      this.name = event.target.value;
    }
  },
  computed: {
    displayName() {
      console.log("displaying....");
      return this.name + " " + this.lastname;
    }
  },
  watch: {
    count(value) {
      if (value > 5) {
        console.log("count is " + value);
        const that = this;
        setTimeout(function () {
          that.count = 0;
        }, 2000);
      }
    }
    // name(value) {
    //   this.fullname = value + " " + this.lastname;
    // },
    // lastname(value) {
    //   this.fullname = this.name + " " + value;
    // }
  }
}).$mount("#app");
