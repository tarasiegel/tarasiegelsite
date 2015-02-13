var socket = io();

Parse.initialize("6Wjb9qN60rilr4LKChBlxt1lNh1eMCI8InP31mPZ", "icCZ3TUR1UGNrgbZcFWeQ9N1WrrMdY0uEG1KFDJK");

$(document).ready(function() {
  $("input[type='checkbox']").click(function(evt){
    if (evt.currentTarget.checked) {
      socket.emit('check', $(this).val());
    } else {
      socket.emit('uncheck', $(this).val());
    }
  });
  socket.on('update', function(board){
    var keys = Object.keys(board);
    for (var i = 0; i < keys.length; i++) {
      console.log(keys[i]);
      $("input[value='" + keys[i] + "']").attr("disabled", board[keys[i]]);
    };
  });
  socket.on('check', function(value){
   $("input[value='" + value + "']").attr("disabled", true);
  });
  socket.on('uncheck', function(value){
   $("input[value='" + value + "']").attr("disabled", false);
  });

  $('#initial-login').click(function() {
    $(this).hide();
    $('#initial-sign-up').hide();
    $('.login-form').show();
  });

  $('#initial-sign-up').click(function() {
    $(this).hide();
    $('#initial-login').hide();
    $('.sign-up-form').show();
  });

  $('.login').click(function() {
    var password = $('#login-password').val();
    var email = $('#login-email').val();
    login(email, password);
  });

  $('.sign-up').click(function() {
    var name = $('#signup-name').val();
    var email = $('#signup-email').val();
    var password = $('#signup-password').val();
    signup(name, email, password);
  });

  $('.log-out').click(function() {
    if (currentUser) {
      Parse.User.logOut();
      $('.username').html('');
    }
  });

  var currentUser = Parse.User.current();

  if (currentUser) {
    $('.username').html(currentUser._serverData.name);
  }

  var signup = function(name, email, password) {
    var newUser = new Parse.User();
    newUser.set('username', email);
    newUser.set('name', name);
    newUser.set('password', password);
    newUser.set('email', email);
    newUser.signUp(null, {
      success: function(user) {
        console.log('success signup!');
        currentUser = Parse.User.current();
        $('.username').html(currentUser._serverData.name);
      },
      error: function(user, error) {
        console.log("Error: " + error.code + " " + error.message);
      }
    });
  };

  var login = function(email, password) {
    Parse.User.logIn(email, password, {
      success: function(user) {
        currentUser = Parse.User.current();
        console.log(currentUser);
        $('.username').html(currentUser._serverData.name);
      },
      error: function(user, error) {
      }
    });
  }












});