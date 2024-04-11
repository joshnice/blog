create table if not exists users (
	id varchar(36),
	first_name varchar(20),
	last_name varchar(20),
	email varchar(100),
	primary key (id)
);
