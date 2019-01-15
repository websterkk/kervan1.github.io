Vue.use(VeeValidate);
var app = new Vue({
  el: '#signup',
  data: {
    message: '',
    email: '',
    errorMessage: '',
    validate: false
  },
  methods: {
    submit: function () {
      this.ajaxRequest = true;
      this
        .$http
        .post('https://api.kervan.carlbroadbent.net/api/subscribe.json', {email: this.email})
        .then(function (data) {
          this.errorMessage = '';
          this.message = data.body;
        }).catch(function (data) {
        this.errorMessage = 'There was error registering your subscription. please try again later.';
      });

    }
  }
});
app.$mount('.contact');