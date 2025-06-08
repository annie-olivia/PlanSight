import { auth } from "@/auth";
import PlanForm from "@/components/PlanForm";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();
  
  if(!session) redirect("/");
  
  return (
    <>
       <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Submit your plan</h1>
       </section>
       <PlanForm />
    </>
  )
}

export default Page;