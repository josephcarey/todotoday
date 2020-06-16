-- **********
-- Drop the table(s) if they exist
--
-- I do this for testing so that it is easy to just run the entire file
-- to reset the data back to a testing state
-- **********

DROP TABLE IF EXISTS "todo" CASCADE;


-- **********
-- Create the table(s)
-- **********

CREATE TABLE "todo" (
    "id" serial PRIMARY KEY,
	"creation_date" TIMESTAMP DEFAULT NOW(),
	"text" varchar(255) NOT NULL DEFAULT 'New to do',
	"is_completed" BOOLEAN DEFAULT 'false'
);

-- **********
-- Sample data
-- **********

INSERT INTO "todo" ("text")
VALUES
('Get milk'),
('Write funnier test data'),
('Make sure to commit data to git')
;