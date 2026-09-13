# Docker classroom example

This project runs a Next.js frontend, an Express API, and MySQL with Docker
Compose. Docker Desktop is the only prerequisite.

## Start the project

1. Install and start Docker Desktop.
2. Open a terminal in this directory.
3. Run:

   ```sh
   docker compose up --build
   ```

Open these addresses after the containers have started:

- Frontend: <http://localhost:3000>
- Backend test endpoint: <http://localhost:3001/test>
- MySQL from a host database client: `localhost:3307`

Press `Ctrl+C` to stop the project. To remove its containers and network, run:

```sh
docker compose down
```

To also delete the database data and initialize a fresh `users` table on the
next start, run:

```sh
docker compose down --volumes
```
