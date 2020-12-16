(function ($) {
  //   $(document).on("change", ".password", function () {
  //     alert(this.value);
  //   });
  //   function passwordcheck(e) {
  //   $(document).on("change", ".password", function (e) {
  //   $("#password").change(function () {
  // e.preventDefault();
  //   $(document.body).on("change", "#password", function (e) {

  //   $(document).on("click", ".password", (e) => {
  //   $("input[name=password]").change(function () {
  //     e.preventDefault();
  //     alert("hello");
  //     // e.preventDefault();
  //     var password = $(this).val();
  //     if (password.length >= 8) {
  //       $("#password_charcters").show();
  //     } else {
  //       $("#password_charcters").hide();
  //     }
  //     if (password.len() >= 8) {
  //       $("#password_alpha").show();
  //     } else {
  //       $("#password_alpha").hide();
  //     }
  //     if (password.len() >= 8) {
  //       $("#password_numerical").show();
  //     } else {
  //       $("#password_numerical").hide();
  //     }
  //   });
  //   function myFunction() {
  //   $(document).on("change", ".retypepassword", (e) => {
  //   $(".retypepassword").on("change", function myFunction() {
  //   $("#retypepassword").onchange((e) => {
  //   $("#retypepassword").change(function () {
  $("#retypepassword").on("input", function () {
    //   $(document).on("change", ".retypepassword", (e) => {
    alert("hello");
    console.log("hello");
    var password = $("#password").val();
    var retypepassword = $("#retypepassword").val();
    if (password == retypepassword) {
      $("#matchpassword").show();
      $("#matchpassword").val("&#9989;");
      document.getElementById("matchpassword").style.color = "green";
    } else {
      $("#matchpassword").show();
      $("#matchpassword").val("&#10060;");
      document.getElementById("matchpassword").style.color = "red";
    }
  });
});
