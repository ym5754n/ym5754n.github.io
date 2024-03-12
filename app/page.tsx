import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export default function Home() {
  return (
    <main className="relative lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <section className="container pt-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Home</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>
      <section className="container pt-6">
        <p>{`This is ym5754n's site.`}</p>
      </section>
    </main>
  );
}
