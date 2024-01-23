CREATE TABLE calendar
(
    id          BIGINT PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
    eventName   VARCHAR(100)    NOT NULL,
    eventDate   DATETIME        NOT NULL,
    targetGroup VARCHAR(50)     NOT NULL,
    eventTime   VARCHAR(50)
);

CREATE TABLE animalInfo
(
    id          BIGINT PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
    animalType  VARCHAR(100)    NOT NULL,
    description TEXT            NOT NULL,
    image       TEXT            NOT NULL
);
