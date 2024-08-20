import { exec } from "child_process";

const migrationName = process.argv[2];

if (!migrationName) {
  console.error("Please provide a migration name.");
  process.exit(1);
}

const command = `npm run typeorm migration:generate -- -d ./src/Data/DataSource/setupDataSource.ts src/Migrations/${migrationName}`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error generating migration: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Error: ${stderr}`);
    return;
  }
  console.log(`Migration generated successfully:\n${stdout}`);
});
