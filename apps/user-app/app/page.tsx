import { PrismaClient } from "@repo/db/client";
const client= new PrismaClient()

export default function Home() {
  return (
   <h1 className="text-3xl font-bold bg-blue-600">
    Hello 
   </h1>
          
  );
}
