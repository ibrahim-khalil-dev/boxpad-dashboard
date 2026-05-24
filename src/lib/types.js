// This file defines all TypeScript-like interfaces as JSDoc comments
// It helps with code organization and documentation

export const UserType = {
  /*
   * @typedef {Object} User
   * @property {string} id
   * @property {string} name
   * @property {string} avatar
   * @property {string} avatarColor
   * @property {string} [status]
   * @property {string} [email]
   * @property {string} [phone]
   * @property {string} [title]
   */
};

export const MessageType = {
  /*
   * @typedef {Object} Message
   * @property {string} id
   * @property {string} senderId
   * @property {string} content
   * @property {string} timestamp
   * @property {boolean} [read]
   */
};

export const ConversationType = {
  /*
   * @typedef {Object} Conversation
   * @property {string} id
   * @property {User} participant
   * @property {Message} lastMessage
   * @property {Message[]} messages
   * @property {number} unreadCount
   */
};

export const ContactLabelType = {
  /*
   * @typedef {Object} ContactLabel
   * @property {string} id
   * @property {string} name
   * @property {string} color
   */
};

export const ContactType = {
  /*
   * @typedef {Object} Contact
   * @property {string} id
   * @property {string} firstName
   * @property {string} lastName
   * @property {string} email
   * @property {string} phone
   * @property {User} assignedTo
   * @property {string} team
   * @property {ContactLabel[]} labels
   */
};