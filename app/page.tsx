import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export default function Home() {
  return (
    <main className="relative p-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Home</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <p>{`This is ym5754n's site.`}</p>
    </main>
  );
}
