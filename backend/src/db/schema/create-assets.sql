create table if not exists assets (	
	id varchar(36),
	url varchar(255),
	type enum('post', 'image', 'video'),
	primary key (id)
);
