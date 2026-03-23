import { app } from './app.js';
import { connectToDatabase } from './config/db.js';
import { env } from './config/env.js';

async function bootstrap() {
  await connectToDatabase();

  app.listen(env.PORT, () => {
    console.log(`API listening on http://localhost:${env.PORT}`);
  });
}

bootstrap().catch((error) => {
  console.error('Failed to start API', error);
  process.exit(1);
});
