create table if not exists projects (
    id varchar(36),
    name varchar(100),
    colour varchar(7),
    project_json(255),
    primary key (id)
)