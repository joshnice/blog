create table if not exists posts (
	id varchar(36),
	title varchar (100),
	author_id varchar(36),
	asset_id varchar(36),
	thumbnail_id varchar(36),
	primary key (id)
);