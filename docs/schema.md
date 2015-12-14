# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      |
lat         | float     |
lng         | float     |
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

## area_photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo_id    | integer   | not null, foreign key (references photos), indexed
area_id     | integer   | not null, foreign key (references areas), indexed

## comments
column name  |           | details
-------------|-----------|----------------------
id           | integer   | not null, primary key
photo_id     | integer   | not null, foreign key (references photos), indexed
user_id      | integer   | not null, foreign key (references users), indexed
body         | text      | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
label       | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo_id    | integer   | not null, foreign key (references photos), indexed
tag_id      | integer   | not null, foreign key (references tags), indexed
