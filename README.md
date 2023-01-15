# Next.js Progress Tracker PWA

## Local development

Initialise supabase

```
  npx supabase login
```

```
  npx supabase init
```

```
  npx supabase start
```

## Migrations

### Generate

The generate command generates assets like Prisma Client based on the generator and data model blocks defined in your prisma/schema.prisma file.

The generate command is most often used to generate Prisma Client with the prisma-client-js generator. This does three things:

Searches the current directory and parent directories to find the applicable npm project. It will create a package.json file in the current directory if it cannot find one.
Installs the @prisma/client into the npm project if it is not already present.
Inspects the current directory to find a Prisma schema file to process. It will then generate a customized Prisma Client for your project.

```
npx prisma generate
```

### Push

The db push command pushes the state of your Prisma schema file to the database without using migrations. It creates the database if the database does not exist.

This command is a good choice when you do not need to version schema changes, such as during prototyping and local development.

```
npx prisma db push
```

### Migrate

The migrate dev command updates your database using migrations during development and creates the database if it does not exist.

```
npx prisma migrate dev
```
