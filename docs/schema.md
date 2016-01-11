# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, unique

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      |
photo_url   | string    | not null
area_id     | integer   | foreign key (references areas), indexed
user_id     | integer   | foreign key (references users), indexed

## areas
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
name         | string    | not null
description  | text      | not null
lat          | float     | not null
lng          | float     | not null
moderator_id | float     | not null, foreign key (references users), indexed
