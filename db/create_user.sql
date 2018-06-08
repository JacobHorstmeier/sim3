INSERT INTO users (id, user_name, password, profile_pic)
values ($1,$2,$3)
RETURNING *;