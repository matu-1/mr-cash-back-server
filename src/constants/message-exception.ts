export abstract class MessageException {
  static GENERAL = 'Oops an error occurred';
  static NOT_FOUND = 'There is not record';
  static NOT_DELETE = "Can't delete, contact administrators";
  static EMAIL_FOUND = 'The email already exists';
}
