const rootApp = new Vue ({
  el: "#root",
  data: {
    isActive: false,
    phoneNumber: '+1 (305) 1234-5678',
    emailAddress: 'hello@example.com',
    address: 'Main Avenue, 987',
    openHours: {
      dayFrom: 'Mon',
      dayTo: 'Sat',
      hoursFrom: '9.00',
      hoursTo: '18.00'
    }
  },

  methods: {
      dropdown() {
          this.isActive = !this.isActive;
      },

      documentClick(e) {
          let el = this.$refs.dropdownMenu
          let target = e.target
          if (el !== target && !el.contains(target)) {
              this.isActive = false
          }
      }
  },
  created() {
      document.addEventListener('click', this.documentCliclk)
  },
  destroyed() {
      document.removeEventListener('click', this.documentClick)
  }
});
