create table if not exists posts (
	id varchar(36),
	title varchar (100),
	author_id varchar(36),
	post_url varchar(100),
	thumbnail_url varchar(100),
	primary key (id)
)