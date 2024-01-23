CREATE TABLE calendar
(
    id          INT PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
    eventName   VARCHAR(255)    NOT NULL,
    eventDate   TIMESTAMP       NOT NULL,
    targetGroup VARCHAR(255)    NOT NULL,
    eventTime   VARCHAR(255)
);