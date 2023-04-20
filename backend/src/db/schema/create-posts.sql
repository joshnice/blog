create table if not exists posts (
	id varchar(36),
	title varchar (100),
	author_id varchar(36),
	post_url varchar(36),
	thumbnail_url varchar(36),
	primary key (id)
)