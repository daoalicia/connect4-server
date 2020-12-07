DROP DATABASE IF EXISTS connect4;
DROP USER IF EXISTS connect4_user@locahost;

CREATE DATABASE connect4 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER connect4_user@localhost IDENTIFIED BY 'connect4@ASProject2';
GRANT ALL PRIVILEGES ON connect4.* TO connect4_user@locahost;
