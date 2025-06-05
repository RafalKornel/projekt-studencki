import { auth } from "@/auth";
import { Role } from "@/database/enums";
import { redirect } from "next/navigation";
import { getServices } from "./actions";
import { ServicesTable } from "./components/ServicesList";
import { Separator } from "@/components/ui/separator";
import { NewServiceSider } from "./components/NewServiceSider";

export default async function ServicesPage() {
  const session = await auth();

  if (session?.user.role !== Role.Administrator) {
    return redirect("/");
  }

  const services = await getServices();

  return (
    <main className="flex flex-col h-full gap-4">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl">Services page</h1>
        <NewServiceSider />
      </div>
      <Separator />
      <ServicesTable services={services} />
    </main>
  );
}
