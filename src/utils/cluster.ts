
import cluster, { Worker } from 'cluster';
import os from 'os';
import { app } from '../app'; 

const numCPUs = os.cpus().length;

if (cluster.isPrimary || cluster.isMaster) {
  console.log(`Master process is running`);

  
  for (let i = 0; i < numCPUs - 1; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker: Worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  
  const portOffset = cluster.worker?.id ?? 0; 
  const basePort = parseInt(process.env.PORT || '4000', 10);
  
  app.listen(basePort + portOffset, () => {
    console.log(`Worker ${process.pid} is running on port ${basePort + portOffset}`);
  });
}
