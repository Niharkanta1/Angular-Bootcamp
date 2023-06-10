module.exports = {
  login_success,
  login_failed_invalid_password,
  login_falied,
  auth_check,
  auth_check_failed,
  email_details,
  email_list,
  email_send_success
};

var login_success = {
  "username": "nihartest1"
};

var login_failed_invalid_password = {
  "password": "Invalid password"
};

var login_falied = {
  "username": "Email not found!",
  "password": "Invalid password"
};

var auth_check = {
  "authenticated": true,
  "username": "nihartest1"
};

var auth_check_failed = {
  "authenticated": false,
  "username": null
};

var email_list = [
  {
    "id":"10001",
    "subject": "Hi ! How are you?",
    "from": "somerandom1@gmail.com"
  },
  {
    "id":"10002",
    "subject": "Test Subject",
    "from": "somerandom2@gmail.com"
  },
  {
    "id":"10003",
    "subject": "Testing",
    "from": "somerandom3@gmail.com"
  }
];

var email_details = {
  "id":"10001",
  "subject": "Hi ! How are you?",
  "from": "somerandom1@gmail.com",
  "to": "nihartest1@test.com",
  "text": "This is a test email. Created with express js.\n",
  "html": "<div dir=\"ltr\">This is a test email. Created with express js.</div>\n"
};

var email_send_success = {
  "status": "Email sent successfully"
}
