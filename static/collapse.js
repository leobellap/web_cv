export default () => ({
  open: true,

  toggle() {
    this.open = !this.open;
  },

  close() {
    this.open = false;
  },
});
