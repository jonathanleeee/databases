DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

-- CREATE TABLE messages (
--   /* Describe your table here.*/
-- );

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

 -- ---
 -- Globals
 -- ---

 -- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
 -- SET FOREIGN_KEY_CHECKS=0;

 -- ---
 -- Table 'Users'
 --
 -- ---

 DROP TABLE IF EXISTS `Users`;

 CREATE TABLE `Users` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR(20) NOT NULL,
   PRIMARY KEY (`id`)
 );

 -- ---
 -- Table 'Messages'
 --
 -- ---

 DROP TABLE IF EXISTS `Messages`;

 CREATE TABLE `Messages` (
   `id` INTEGER AUTO_INCREMENT,
   `text` VARCHAR(140) NOT NULL DEFAULT 'NULL',
   `room` INTEGER NOT NULL,
   `users` INTEGER NOT NULL,
   PRIMARY KEY (`id`)
 );

 -- ---
 -- Table 'Room'
 --
 -- ---

 DROP TABLE IF EXISTS `Room`;

 CREATE TABLE `Room` (
   `id` INTEGER AUTO_INCREMENT,
   `name` VARCHAR(20) NOT NULL,
   PRIMARY KEY (`id`)
 );

 -- ---
 -- Foreign Keys
 -- ---

 ALTER TABLE `Messages` ADD FOREIGN KEY (room ) REFERENCES `Room` (`id`);
 ALTER TABLE `Messages` ADD FOREIGN KEY (users) REFERENCES `Users` (`id`);

 -- ---
 -- Table Properties
 -- ---

 -- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
 -- ALTER TABLE `Messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
 -- ALTER TABLE `Room` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

 -- ---
 -- Test Data
 -- ---

 -- INSERT INTO `Users` (`id`,`name`) VALUES
 -- ('','');
 -- INSERT INTO `Messages` (`id`,`text`,`room `,`users`) VALUES
 -- ('','','','');
 -- INSERT INTO `Room` (`id`,`name`) VALUES
 -- ('','');
